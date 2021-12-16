import { Expansiones, TipoTarjeta } from "./enums";

export class Tarjeta {
  id : any;
  tipo : TipoTarjeta;
  texto : string;
  expansion : Expansiones;

  constructor(tipo : TipoTarjeta, texto : string){
    this.tipo = tipo;
    this.texto = texto;
    this.expansion = Expansiones.principal;
  }

}
