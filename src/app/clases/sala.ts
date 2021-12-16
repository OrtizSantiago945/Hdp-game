import { Usuario } from "./usuario";

export class Sala {
  id : any;
  nombre : string;
  participantes : Usuario[];
  numeroParticipantes : number;
  creador : string;

  constructor(creador : string, nombre : string){
    this.creador = creador;
    this.nombre = nombre;
    this.participantes = [];
    this.numeroParticipantes = this.participantes.length;
  }

}
