import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeatroService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

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
