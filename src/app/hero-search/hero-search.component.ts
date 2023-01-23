import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';



@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})

export class HeroSearchComponent implements OnInit{
/*on définit heroes$ = un observable que l'on reprend ensuite dans la méthode ngOnInit plus bas*/
  heroes$!: Observable<Hero[]>;
  private searchTerms = new Subject<string>();

  constructor(private heroService: HeroService) {}

  // Push a search term into the observable stream.
    search(term: string): void {
      this.searchTerms.next(term);
    }

  ngOnInit(): void {
    this.heroes$ = this.searchTerms.pipe(
      // wait 300ms avant d'envoyer une requête
      debounceTime(300),

      //garantit qu'une demande est envoyée uniquement si le texte du filtre a changé
      distinctUntilChanged(),

      // switchMap = appelle le service de recherche pour chaque terme de recherche qui passe par debounce et distinctUntilChanged.
      //Il annule
      switchMap((term: string) => this.heroService.searchHeroes(term)),
    );
  }

}
