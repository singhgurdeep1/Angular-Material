import { Component, AfterViewInit, ViewChild, Input, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TableColumns } from './columnModel';

import { JSONPlaceholderService } from './../services/jsonplaceholder.service';
import { Todo } from '../periodicModel';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, AfterViewInit {

  deleteable: boolean = false;
  editable: boolean = false;
  
  @Input() filter: boolean = false;
  @Input() paging: boolean = false;
  @Input() data: any[];
  @Input() columns: TableColumns[];
  @Input() actions: boolean[];
  //@Input() deleteable: boolean = false;
  dataSource: any;
  displayedColumns: string[];


  //dataSource = new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA);

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private JSONPlaceholder: JSONPlaceholderService) { }

  ngOnInit(): void {

    this.editable = this.actions[0];
    this.deleteable = this.actions[1];  
    
    this.displayedColumns = this.columns.map(result => result.columnDef);
    if(this.deleteable || this.editable) {
      this.displayedColumns.push('action');
    }
    this.dataSource = new MatTableDataSource<any>(this.data);
   /* 
    this.displayedColumns = this.columns.map(result => result.columnDef);
    this.dataSource = new MatTableDataSource<any>(this.data);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
     */  
  }

  
  ngAfterViewInit() {
    
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  onDeleteTodo(todo: Todo) {
    const index = this.dataSource.data.indexOf(todo);
    this.dataSource.data.splice(index, 1);
    this.dataSource._updateChangeSubscription(); // <-- Refresh the datasource   
  }
 
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onEditTodo(todo: Todo) {
    const index = this.dataSource.data.indexOf(todo);
    this.dataSource.data[index].name = this.dataSource.data[index].name.toUpperCase();
    this.dataSource._updateChangeSubscription();
  }
}
