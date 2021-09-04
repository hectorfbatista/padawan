import { Routes } from '@angular/router';

import { AlbumsComponent } from './Pags/albums/albums.component';
import { HomeComponent } from './Pags/home/home.component';
import { PostsComponent } from './Pags/posts/posts.component';
import { TodosComponent } from './Pags/todos/todos.component';

export const AppRoutes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
      path: 'todos',
      component: TodosComponent
  },
  {
      path: 'albums',
      component: AlbumsComponent

  },
  {
      path: 'posts',
      component: PostsComponent

  }

]