import { Injectable } from '@angular/core';
import { Hero } from'./hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
/*Pour mettre les messages d'erreurs*/
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

 /* private heroesUrl = 'api/heroes';  // URL to web api*/
 private heroesUrl = 'http://localhost:8081/api/heroes';


  constructor(
  /*On importe HttpClient et HttpHeader pour pouvoir faire une fausse base de données. On a crée avant le serviceInMemoryData.
  */
    private http: HttpClient,
    private messageService: MessageService) { }

/*of(HEROES) renvoie un observable<HERO[]> qui émet une seule valeur, le tableau des faux héros
  getHeroes(): Observable<Hero[]> {
  const heroes = of(HEROES);
  return heroes;
  }
  */

  /** GET heroes from the server */
  /*getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
  }*/

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  /*getHeroes(): Observable<Hero[]> {
  const heroes = of(HEROES);
  this.messageService.add('HeroService: fetched heroes');
  return heroes;
  }
  /*Méthode pour gérer les erreurs*/
/** GET heroes from the server */
  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
      .pipe(
        tap(_ => this.log('fetched heroes')),
        catchError(this.handleError<Hero[]>('getHeroes', []))
      );
  }

  /*On reprend le get avec la location et le fait de vouloir prendre un héros par son id
  getHero(id: number): Observable<Hero> {
    const hero = HEROES.find(h => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
    }*/
    /*Avec gestion des erreurs*/
    /** GET hero by id. Will 404 if id not found */
    getHero(id: number): Observable<Hero> {
      const url = `${this.heroesUrl}/${id}`;
      return this.http.get<Hero>(url).pipe(
        tap(_ => this.log(`fetched hero id=${id}`)),
        catchError(this.handleError<Hero>(`getHero id=${id}`))
      );
    }

      /*Méthode pour modifier un héros. Prend 3 paramètres :
      1) URL, 2) les données à mettre à jour, 3) les choix*/
      updateHero(hero: Hero): Observable<any> {
        return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(
          tap(_ => this.log(`updated hero id=${hero.id}`)),
          catchError(this.handleError<any>('updateHero'))
         );
      }

      httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      };

  /** POST: add a new hero to the server .
  Méthode POST appelle HttpClient.post et s'atend à ce que le serveur crée un nveau ID*/
  addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions).pipe(
      tap((newHero: Hero) => this.log(`added hero w/ id=${newHero.id}`)),
      catchError(this.handleError<Hero>('addHero'))
    );
  }

  /** DELETE: delete the hero from the server */
  deleteHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;

    return this.http.delete<Hero>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<Hero>('deleteHero'))
    );
  }

  /* GET heroes whose name contains search term */
  searchHeroes(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
         this.log(`found heroes matching "${term}"`) :
         this.log(`no heroes matching "${term}"`)),
      catchError(this.handleError<Hero[]>('searchHeroes', []))
    );
  }

   /*
    * Handle Http operation that failed.
    * Let the app continue.
    *
    * @param operation - name of the operation that failed
    * @param result - optional value to return as the observable result
    */
   private handleError<T>(operation = 'operation', result?: T) {
     return (error: any): Observable<T> => {

       // TODO: send the error to remote logging infrastructure
       console.error(error); // log to console instead

       // TODO: better job of transforming error for user consumption
       this.log(`${operation} failed: ${error.message}`);

       // Let the app keep running by returning an empty result.
       return of(result as T);
     };
   }
}
