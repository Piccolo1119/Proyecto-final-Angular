import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-screen-info',
  templateUrl: './pantalla.component.html',
  styleUrls: ['./pantalla.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule],
})
export class PantallaComponent implements OnInit {

  availHeight: number | undefined;
  availWidth: number | undefined;
  height: number | undefined;
  width: number | undefined;
  colorDepth: number | undefined;
  pixelDepth: number | undefined;
  orientation: string | undefined;
  orientationType: string | undefined;

  constructor() { }
  //comprueba las propiedades de la pantalla para ir guardando la información
  ngOnInit(): void {
    if (typeof window !== 'undefined' && window.screen) {
      this.availHeight = window.screen.availHeight;
      this.availWidth = window.screen.availWidth;
      this.height = window.screen.height;
      this.width = window.screen.width;
      this.colorDepth = window.screen.colorDepth;
      this.pixelDepth = window.screen.pixelDepth;
      this.orientation = window.screen.orientation.type;
    }
  }
}
