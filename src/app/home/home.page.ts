import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  variable = 0;
  variable2= 0;
  resultado= 0;
  operacion= '';
  falso_verdadero= false;

  constructor() {}

  sumar(){
     this.resultado= this.variable + this.variable2;
     this.operacion='suma'
}
   restar(){
    this.resultado= this.variable - this.variable2;
    this.operacion='resta'
}

   multiplicar(){
    this.resultado= this.variable * this.variable2;
    this.operacion= 'multiplicación'
}

   dividir(){
    this.resultado= this.variable / this.variable2;
    this.operacion='división'
}
}
