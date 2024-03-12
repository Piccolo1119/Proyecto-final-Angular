import { Component, OnInit } from '@angular/core';
import { PokeService } from '../../services/poke.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-pokemon',
  templateUrl: './poke.component.html',
  styleUrls: ['./poke.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule],
})

export class PokemonComponent implements OnInit {
  pokemon: any;  // Variable para almacenar los datos del pokemon

  constructor(private pokeService: PokeService) { }

  ngOnInit(): void {
    // Al inicializar el componente, obtenemos un Pokémon aleatorio
    this.getRandomPokemon();
  }

  getRandomPokemon(): void {
    const randomId = Math.floor(Math.random() * 151) + 1; // Genera un ID aleatorio entre 1 y 151
    this.pokeService.getPokemonById(randomId).subscribe(
      (data:any) => {
        this.pokemon = data;
        console.log(this.pokemon);
      },
      (error:any) => {
        console.error('Error al obtener el Pokémon:', error);
      }
    );
  }
}
