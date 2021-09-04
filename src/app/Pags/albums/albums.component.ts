import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AppService } from 'src/app/Service/app.service';
import { ToDosData } from '../todos/todos.component';

export interface AlbumsData {
  id: number;
  userId: number;
  title: string;
}

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})

export class AlbumsComponent implements OnInit {
  albums: any;
  displayedColumns: string[] = ['id', 'userId', 'title' ];
  dataSource: MatTableDataSource<ToDosData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.appService.getAlbums().subscribe(data => {
      this.albums = data;
      this.dataSource = new MatTableDataSource(this.albums);
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
