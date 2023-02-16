import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { WcsGrid } from 'wcs-angular';
import { EnteteGrid } from '../enteteGrid';


import { Table } from '../table';
import { ENTETEGRIDS, TABLES } from '../tableMoke';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})


export class TableComponent implements OnInit {

  tables: Table[] = TABLES;
  enteteGrids: EnteteGrid []= ENTETEGRIDS;


  selectedItems: Table[] = [];

  /*@ViewChild('wcsGrid') wcsGrid!: WcsGrid;*/

  ngOnInit(): void {
  }

  print(event: any): void {
    /*console.log(this.wcsGrid.selectedItems);*/
    console.log(event);
    const index = this.selectedItems.indexOf(event.detail.row.data);
    if(event.detail.row.selected == true) {
    this.selectedItems.push(event.detail.row.data);
    } else {
     const index = this.selectedItems.indexOf(event.detail.row.data);
      this.selectedItems.splice(index, 1);
      console.log(index);
      /*const index = this.selectedItems.flat(event.detail.row.data);*/
      /*const index = this.selectedItems.indexOf(event.detail.row.data);
      this.selectedItems.splice(index, 1);*/
      /*if(index !== -1){
        this.selectedItems.splice(index, 1);
      }*/
      /*if(index !== -1 || event.detail.row.selected == false){
        this.selectedItems.splice(event.detail.row.data);
      }*/
      /*if(index !== -1 || event.detail.row.selected == false){
        this.selectedItems && this.tables
      }*/
      /*this.selectedItems && this.tables*/
      /*return;*/
      /*const index = this.selectedItems.indexOf(event.detail.row.data);
      this.selectedItems.splice(index, -1);*/
    }
    console.log(this.selectedItems);
    console.log(event);
  
  }
}













/** 
export class TableComponent implements OnInit {
  /*on définit heroes$ = un observable que l'on reprend ensuite dans la méthode ngOnInit plus bas
  tables$!: Observable<Table[]>;
  private searchTerms = new Subject<string>();

  constructor(private heroService: HeroService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.tables$ = this.searchTerms.pipe(
      // wait 300ms avant d'envoyer une requête
      debounceTime(300),

      //garantit qu'une demande est envoyée uniquement si le texte du filtre a changé
      distinctUntilChanged(),

      // switchMap = appelle le service de recherche pour chaque terme de recherche qui passe par debounce et distinctUntilChanged.
      //Il annule
      switchMap((term: string) => this.heroService.searchHeroes(term))
    );
  }
}
*/