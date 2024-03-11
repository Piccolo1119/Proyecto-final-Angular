import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})

export class CalculadoraComponent {
  ans: string = "";
  clear: boolean = false;
  calc: string = "";

  constructor() {}

  onClick(value: string): void {
    if (parseInt(value, 10) == +value || value === "." || value === "/" || value === "*" || value === "-" || value === "+" || value === "%") {
      if (this.clear === false) {
        this.calc += value;
      } else {
        this.calc = value;
        this.clear = false;
      }
    } else if (value === "AC") {
      this.calc = "";
    } else if (value === "CE") {
      this.calc = this.calc.slice(0, -1);
    } else if (value === "=") {
      try {
        this.ans = this.evaluateExpression(this.calc);
        this.calc = this.ans;
        this.clear = true;
      } catch (error) {
        console.error('Error al evaluar la expresión:', error);
        this.ans = "Error";
        this.clear = true;
      }
    } else if (value === "Ans") {
      this.calc += this.ans;
    }
  }

  private evaluateExpression(expression: string): string {
    // Utilizar una función anónima para evaluar la expresión de forma segura
    const result = Function('"use strict"; return (' + expression + ')')();
    return result.toString(); // Convertir el resultado a string
  }
}