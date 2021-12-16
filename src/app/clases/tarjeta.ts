import { TipoTarjeta } from "./enums";

export class Tarjeta {
  id : any;
  tipo : TipoTarjeta;
  texto : string;

  constructor(tipo : TipoTarjeta, texto : string){
    this.tipo = tipo;
    this.texto = texto;
  }

}
