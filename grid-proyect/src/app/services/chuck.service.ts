import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
//Pillo la información de Chuck Norris Api y almaceno en un servicio tres funciones con tres funcionalidades que tiene
export class ChuckService {
  apiUrl: string = 'https://api.chucknorris.io/jokes';

  constructor(private http: HttpClient) { }

  getRandomJoke(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/random`);
  }

  getJokeCategories(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/categories`);
  }

  getJokeByCategory(category: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/random?category=${category}`);
  }
}
