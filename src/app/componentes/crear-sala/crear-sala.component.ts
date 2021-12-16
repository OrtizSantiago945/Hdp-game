import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Sala } from 'src/app/clases/sala';
import { Usuario } from 'src/app/clases/usuario';

@Component({
  selector: 'app-crear-sala',
  templateUrl: './crear-sala.component.html',
  styleUrls: ['./crear-sala.component.css']
})
export class CrearSalaComponent implements OnInit {

  @Output() navegacion = new EventEmitter<string>();

  nombre! : string;
  sala! : Sala;
  usuario : Usuario;

  constructor() {
    this.usuario = new Usuario(localStorage.getItem('usuario')?.toString()!);
  }

  ngOnInit(): void {
  }

  crear(){
    if (this.nombre) {
      this.sala = new Sala(this.usuario.nombre, this.nombre);
      this.sala.participantes.push(this.usuario);
    }else{
      alert('Ingresa el nombre de la sala!');
    }
  }

  volver(){
    this.navegacion.emit('home');
  }

}
