import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navegador-info',
  templateUrl: './navegador.component.html',
  styleUrls: ['./navegador.component.css'],
  standalone: true,
  imports: [FormsModule,CommonModule],
})
export class NavegadorComponent implements OnInit {

  clipboard: any;
  cookieEnabled: boolean | undefined;
  geolocation: any;
  language: string | undefined;
  onLine: boolean | undefined;
  plugins: any;
  storage: any;
  userAgent: string | undefined;

  constructor() { }
  //comprueba las propiedades del navegador para ir guardando la información
  ngOnInit(): void {
    if (typeof navigator !== 'undefined') {
      this.clipboard = navigator.clipboard;
      this.cookieEnabled = navigator.cookieEnabled;
      this.geolocation = navigator.geolocation;
      this.language = navigator.language;
      this.onLine = navigator.onLine;
      this.plugins = navigator.plugins;
      this.storage = navigator.storage;
      this.userAgent = navigator.userAgent;
    }
  }
}
