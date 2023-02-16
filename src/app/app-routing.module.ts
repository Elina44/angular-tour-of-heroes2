import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './table/table.component';



const routes: Routes = [

  { path: 'table1', component: TableComponent },
  
  /*On crée un chemin de redirection pour renvoyer au dashboard*/
  {path: '', redirectTo: 'table1', pathMatch: 'full' },

  ];

@NgModule({

  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }
/*Qd ces étapes sont faites, on doit mettre le routing dans app.component.html avec le router-outlet*/
