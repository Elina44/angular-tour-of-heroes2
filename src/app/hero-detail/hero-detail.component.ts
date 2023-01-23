import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
/*Pour pouvoir récupérer les id dans une URL*/
import { Location } from '@angular/common';

import { HeroService } from '../hero.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
/*Dans l'enfant, on exporte avec @Input la classe*/
export class HeroDetailComponent {

  hero: Hero | undefined;

    constructor(
      private route: ActivatedRoute,
      private heroService: HeroService,
      private location: Location
    ) {}


    ngOnInit(): void {
      this.getHero();
    }

  /*route.snapshot = image statique des infos de l'itinéraire après la création du composant
  params pour récupérer le paramètre. 'id'= la clé que l'on veut
  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
      .subscribe(hero =>this.hero = hero);
  }

  Méthode pour sauvegarder la création d'un héros
  save(): void {
    if (this.hero) {
      this.heroService.updateHero(this.hero)
        .subscribe(() => this.goBack());
    }
  }
  */
  getHero(): void {
      const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
      this.heroService.getHero(id)
        .subscribe(hero => this.hero = hero);
    }

    goBack(): void {
      this.location.back();
    }

    save(): void {
      if (this.hero) {
        this.heroService.updateHero(this.hero)
          .subscribe(() => this.goBack());
      }
    }
}
