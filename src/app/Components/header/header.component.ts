import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private router: Router) {}

  openAlbums() {
    this.router.navigateByUrl('/albums');
  }

  openPosts(){
    this.router.navigateByUrl('/posts');
  }

  openToDo() {
    this.router.navigateByUrl('/todos');
  }

  redirectHome() {
    this.router.navigateByUrl('/home');
  }
}
