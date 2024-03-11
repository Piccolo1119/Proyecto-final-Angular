import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule],
})
export class JuegoComponent {
  numEntrada: number | null = null;
  mensaje: string | null = null;
  intentos: number = 0;
  numeroSecreto: number;

  constructor() {
    this.numeroSecreto = Math.floor(Math.random() * 100) + 1;
  }

  comprobarNumero() {
    this.intentos++;
    if (this.numEntrada === null || this.numEntrada > 100 || this.numEntrada < 1) {
      this.mensaje = `Pusiste ${this.numEntrada}. Intenta de nuevo. El número debe estar entre 1 y 100`;
      return;
    }

    if (this.numEntrada === this.numeroSecreto) {
      this.mensaje = `El número era ${this.numeroSecreto} y pusiste ${this.numEntrada}. Felicidades, has adivinado el número `;
    } else {
      if (this.numEntrada < this.numeroSecreto) {
        this.mensaje = `El número secreto es mayor que ${this.numEntrada}.`;
      } else {
        this.mensaje = `El número secreto es menor que ${this.numEntrada}.`;
      }
    }
  }
}
