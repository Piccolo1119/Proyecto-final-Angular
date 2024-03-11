import { Component, OnInit } from '@angular/core';
import { TeatroService } from '../../services/teatro.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-teatros',
  templateUrl: './teatro.component.html',
  styleUrls: ['./teatro.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule],
})
export class TeatroComponent implements OnInit {
  teatros: any[] = [];
  nombre: string = '';
  direccion: string = '';

  constructor(private teatroService: TeatroService) { }

  ngOnInit(): void {
    this.getTeatro();
  }

  getTeatro(): void {
    this.teatroService.getTeatros(0, 100).subscribe(
      data => {
        this.teatros = data.teatros;
      }
    );
  }

  deleteTeatro(id: number): void {
    this.teatroService.deleteTeatro(id).subscribe(
      () => {
        this.teatros = this.teatros.filter(teatro => teatro.id !== id);
      }
    );
  }

  addTeatro(): void {
    this.teatroService.addTeatro({
      nombre: this.nombre,
      direccion: this.direccion
    }).subscribe(
      teatro => {
        this.teatros.push(teatro);
        this.nombre = '';
        this.direccion = '';
      }
    );
  }
}
