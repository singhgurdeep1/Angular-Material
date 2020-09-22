import { JSONPlaceholderService } from './services/jsonplaceholder.service';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Todo } from "./periodicModel";
import { TableColumns } from "./table/columnModel";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'demo-project';

  editable: boolean = true;
  deleteable: boolean = true;

  actions: boolean[] = [this.editable, this.deleteable];
/*
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
    { position: 10, name: 'Neon', weight: 20.1797, symbol: '<progress value="32" max="100"> 32% </progress>' },
  ];
*/

  columns: TableColumns[] = [
    { columnDef: 'name', headerTitle: 'Id', cell: (element: any) => `${element.name}`, sortable: true },
    { columnDef: 'description', headerTitle: 'Name', cell: (element: any) => `${element.description}`, sortable: true },
    { columnDef: 'priority', headerTitle: 'Weight(g)', cell: (element: any) => `${element.priority}`, sortable: true },
  ];


  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
    private JSONPlaceholder: JSONPlaceholderService,
    private apiService: ApiService
  ) { }

  $data: Observable<Todo>;
  ngOnInit() {

    this.$data = this.getTodos();
    /*.subscribe(
      data => {
        this.Posts = data;
        console.log(this.Posts);
      }
    );*/
  }

  getTodos(): any {
    return this.apiService.get("todos.json").pipe(
      map((response: any) => {
        const t = [];
        for (const key in response) {
          if (response.hasOwnProperty(key)) {
            t.push(response[key]);
          }
        }
        console.log(t);
        return t;
      })
    );
  }

  onDarkModeChange(isChecked: boolean) {
    const theme = isChecked ? 'theme-dark' : 'theme-light';
    this.renderer.setAttribute(this.document.body, 'class', theme);
  }

  onAdd() {
    this.JSONPlaceholder.addData();
    
  }

  onDeleteTodo(id: number) {
    console.log(id);
  }

}
