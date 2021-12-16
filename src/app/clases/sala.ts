import { Usuario } from "./usuario";

export class Sala {
  id : any;
  participantes : Usuario[];
  numeroParticipantes : number;
  creador : string;

  constructor(creador : string){
    this.creador = creador;
    this.participantes = [];
    this.numeroParticipantes = this.participantes.length;
  }

}
