import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NasaService {
  apiKey: string = 'krJLriREXBcC4genYgFyuKhjrkz7XMmcOffwHUtW';
  apiUrl: string = 'https://api.nasa.gov';

  constructor(private http: HttpClient) { }

  // Obtener la imagen del día de la NASA
  getAPOD(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/planetary/apod?api_key=${this.apiKey}`);
  }

  // Obtener información sobre un asteroide cercano a la Tierra
  getNearEarthObjects(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/neo/rest/v1/feed?api_key=${this.apiKey}`);
  }

  // Otros métodos para acceder a diferentes partes de la API de la NASA pueden ir aquí
}
