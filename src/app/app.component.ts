import { Component, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { PeriodicElement } from "./periodicModel";
import { TableColumns } from "./table/columnModel";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo-project';

  PeriodicElements: PeriodicElement[] = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  ];

  columns: TableColumns[] = [
    { columnDef: 'position', headerTitle: 'Serial Number', cell: (element: any) => `${element.position}`, sortable: true },
    { columnDef: 'name', headerTitle: 'Name', cell: (element: any) => `${element.name}`, sortable: true },
    { columnDef: 'weight', headerTitle: 'Weight(g)', cell: (element: any) => `${element.weight}`, sortable: true },
    { columnDef: 'symbol', headerTitle: 'Symbol', cell: (element: any) => `${element.symbol}`, sortable: true }
  ];


  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2
  ) { }

  onDarkModeChange(isChecked: boolean) {
    const theme = isChecked ? 'theme-dark' : 'theme-light';
    this.renderer.setAttribute(this.document.body, 'class', theme);
  }

}
