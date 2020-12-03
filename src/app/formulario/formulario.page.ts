import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {

  nombre="";
  precio=0;

  productos =[];

  constructor() { }

  ngOnInit() {
  }

  guardarProducto(){
    this.productos.push({
      nombre: this.nombre,
      precio: this.precio
    });
    this.nombre="";
    this.precio= 0;

    console.log("Guardar producto");
  }
}
