import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';
import { HeaderComponent } from './Components/header/header.component';
import { MaterialModule } from './material.module';
import { AlbumsComponent } from './Pags/albums/albums.component';
import { HomeComponent } from './Pags/home/home.component';
import { PostsComponent } from './Pags/posts/posts.component';
import { TodosComponent } from './Pags/todos/todos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PostsComponent,
    AlbumsComponent,
    TodosComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    RouterModule.forRoot(AppRoutes),
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
