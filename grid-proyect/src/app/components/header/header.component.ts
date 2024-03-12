import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone : true,
  imports: [FormsModule, CommonModule],

})
export class HeaderComponent {
  terminoBusqueda: string = '';

  constructor(private router: Router) { }

  buscar(event: Event) {
    event.preventDefault();

    // Reemplaza espacios y convierte a minúsculas para comparación
    const terminoNormalizado = this.terminoBusqueda.toLowerCase().trim();

    // Definimos la lógica para buscar y navegar al elemento del sidebar
    // que coincida con el término de búsqueda
    switch (terminoNormalizado) {
      case 'adivinanza':
        this.router.navigate(['/juego'], { fragment: 'adivinanza' });
        break;
      case 'calculadora':
        this.router.navigate(['/calculadora'], { fragment: 'calculadora' });
        break;
      case 'pantalla':
        this.router.navigate(['/pantalla'], { fragment: 'pantalla' });
        break;
      case 'navegador':
        this.router.navigate(['/navegador'], { fragment: 'navegador' });
        break;
      case 'poke':
        this.router.navigate(['/poke'], { fragment: 'poke' });
      break;
      case 'clima':
        this.router.navigate(['/clima'], { fragment: 'clima' });
      break;
      case 'chuck':
        this.router.navigate(['/chuck'], { fragment: 'chuck' });
      break;
      case 'nasa':
        this.router.navigate(['/nasa'], { fragment: 'nasa' });
      break;
      case 'teatro':
        this.router.navigate(['/teatro'], { fragment: 'teatro' });
      break;
      
      default:
        // Redirige a una página de búsqueda no encontrada o realiza alguna acción alternativa
        break;
    }
  }
}
