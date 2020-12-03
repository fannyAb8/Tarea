import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
})
export class ContactoPage implements OnInit {

  nombre="";
  email="";
  asunto="";
  mensaje="";

  enviar= [];

  constructor() { }

  ngOnInit() {
  }

  Enviar(){
    this.enviar.push({
    nombre: this.nombre,
    email: this.email,
    asunto: this.asunto,
    mensaje: this.mensaje
  });
  this.nombre="";
  this.email="";
  this.asunto="";
  this.mensaje="";

  console.log("Enviar");
}
}
