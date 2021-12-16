import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form-usuario',
  templateUrl: './form-usuario.component.html',
  styleUrls: ['./form-usuario.component.css']
})
export class FormUsuarioComponent implements OnInit {

  @Output() navegacion = new EventEmitter<string>();

  nombre! : string;

  constructor() { }

  ngOnInit(): void {
  }

  nav(ruta : string){
    if (this.nombre) {
      localStorage.setItem('usuario', this.nombre);
      switch (ruta) {
        case 'crear':
          this.navegacion.emit('crear');
          break;
        case 'unirse':
          this.navegacion.emit('unirse');
          break;
        default:
          break;
      }
    }else{
      alert('Ingresa tu nombre!');
    }

  }

}
