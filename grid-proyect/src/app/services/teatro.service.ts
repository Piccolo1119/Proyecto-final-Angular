import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

//obtener la lista de teatros de la base de datos que se encuentra alojada en localhost:3000
export class TeatroService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }
//establezco las funciones segun las operaciones que quiero realizar 
  getTeatros(page: number, perPage: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/teatros?page=${page}&perPage=${perPage}`);
  }

  addTeatro(teatro: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/teatros`, teatro);
  }

  deleteTeatro(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/teatros/${id}`);
  }
}
