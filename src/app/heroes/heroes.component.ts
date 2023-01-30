import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
/*si utilisation d'un service, on supprime cet import
import { HEROES } from '../mock-heroes';*/
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
/*On implémente ici la méthode OnInit pour lancer la fonction à la montée du composant*/
export class HeroesComponent implements OnInit {
/*Et avec OnInit (à importer !) on lui dit:  si Hero est sélectionné => affiche-les*/

/*on retire cette sélection et le onSelect car on a remplacé par le router dans heroes.component.html pour naviguer netre les héros
  selectedHero?: Hero;
  */
  heroes: Hero[] = [];


  /*On injecte ici le service
  constructor(private heroService: HeroService, private messageService: MessageService) {}
  On enlève cette partie avec la mise en place du router pour naviguer entre héros*/
  constructor(private heroService: HeroService) { }
/*méthode get pour récupérer les héros du service mais mauvaise pratique. À la place, on utulise le cycle de vie du composant avec le hook
ngOnInit
  getHeroes(): void {
  this.heroes = this.heroService.getHeroes();
  }*/
    ngOnInit(): void {
    this.getHeroes();
    }
/*Voir plus haut
    onSelect(hero: Hero): void {
     this.selectedHero = hero;
     this.messageService.add('HeroesComponent: Selected hero id=${hero.id}');
    }
*/

  /*Avec l'observable qu'on a mis dans hero.service.ts*/
  getHeroes(): void {
  this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }
  /*Méthode pour ajouter un héros :  si le nom n'est pas vide => création d'un objet qui est transmis à addHero méthode du service.
  Qd addHero est validé =>subscribe reçoit le nveau héros et le met dans heroes. */
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    console.log(name);
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
      console.log(hero);
        this.heroes.push(hero);
      });
  }

  /*Pour supprimer un héros*/
  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }

}
