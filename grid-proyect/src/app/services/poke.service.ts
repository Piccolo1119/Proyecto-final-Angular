import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeService {
  private apiUrl = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) { }

  // Método para obtener información de un Pokémon por su número de ID
  getPokemonById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/pokemon/${id}`);
  }

  // Método para obtener información de un Pokémon por su nombre
  getPokemonByName(name: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/pokemon/${name}`);
  }

  // Método para obtener una lista de Pokémons
  getPokemonList(limit: number = 20, offset: number = 0): Observable<any> {
    return this.http.get(`${this.apiUrl}/pokemon?limit=${limit}&offset=${offset}`);
  }

  // Método para obtener información de un tipo de Pokémon por su nombre
  getPokemonTypeByName(typeName: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/type/${typeName}`);
  }
}
