import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AppService } from 'src/app/Service/app.service';

export interface ToDosData {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos: any;
  displayedColumns: string[] = ['id', 'userId', 'title', 'completed'];
  dataSource: MatTableDataSource<ToDosData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.appService.getToDo().subscribe(data => {
      this.todos = data;
      this.dataSource = new MatTableDataSource(this.todos);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  filtrar(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
