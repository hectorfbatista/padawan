import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(private httpClient: HttpClient) {}
    
    getPosts() {
      return this.httpClient.get('https://jsonplaceholder.typicode.com/posts')
    }
    
    getAlbums() {
      return this.httpClient.get('https://jsonplaceholder.typicode.com/albums')
    }
  
    getToDo() {
      return this.httpClient.get('https://jsonplaceholder.typicode.com/todos')
    }
}
