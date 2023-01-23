import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';



/*Avec routes, on peut mettre les liens pour afficher les vues
Le path reprend une chaîne qui correspond à l'URL dans la barre d'adresse du navigateur
Le component => vers où on va*/
const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent},
  /*On crée un chemin de redirection pour renvoyer au dashboard*/
  {path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {path: 'detail/:id', component: HeroDetailComponent},
  ];

@NgModule({
/*Pour importer les routes dans un tableau.angularLa méthode forRoot permet de configurer le routeur au niveau racine.
Ce qui est avant forRoot donne les fournisseurs de service et les directives*/
  imports: [RouterModule.forRoot(routes)],
  /*Les exportations RouterModule doivent être disponibles dans tte l'application*/
  exports: [RouterModule]
})
export class AppRoutingModule { }
/*Qd ces étapes sont faites, on doit mettre le routing dans app.component.html avec le router-outlet*/
