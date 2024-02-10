import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  title = 'Aplicación Calculadora';
  resultado=0;
  operadorA='';
  operadorB='';
  
  constructor(){

  }

  sumar(){
    console.log("holaa")
    this.resultado=parseInt(this.operadorA.toString())+parseInt(this.operadorB.toString());
  }
}
