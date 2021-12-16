import { Usuario } from "./usuario";

export class Sala {
  id : any;
  participantes : Usuario[];
  numeroParticipantes : number;

  constructor(){
    this.participantes = [];
    this.numeroParticipantes = this.participantes.length;
  }

}
