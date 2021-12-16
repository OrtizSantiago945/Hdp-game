import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-unir-sala',
  templateUrl: './unir-sala.component.html',
  styleUrls: ['./unir-sala.component.css']
})
export class UnirSalaComponent implements OnInit {

  @Output() navegacion = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  unirse(){

  }

  volver(){
    this.navegacion.emit('home');
  }

}
