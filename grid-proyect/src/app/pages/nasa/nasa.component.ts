import { Component } from '@angular/core';
import { NasaService } from '../../services/nasa.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-nasa',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './nasa.component.html',
  styleUrl: './nasa.component.css'
})
export class NasaComponent implements OnInit {
  apodData: any; // Aquí almacenaremos los datos de la Imagen Astronómica del Día

  constructor(private nasaService: NasaService) { }

  ngOnInit(): void {
    this.getAPOD(); // Al inicializar el componente, obtenemos la Imagen Astronómica del Día
  }

  getAPOD(): void {
    this.nasaService.getAPOD().subscribe(
      (data: any) => {
        this.apodData = data;
      },
      (error: any) => {
        console.error('Error fetching APOD:', error);
      }
    );
  }
}