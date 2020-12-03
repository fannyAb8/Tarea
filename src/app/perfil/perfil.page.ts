import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  paso_login =false;
  

  constructor() { }

  ngOnInit() {
  }

  hacerLogin(){
    this.paso_login =true;
  }

}
