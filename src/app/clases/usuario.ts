export class Usuario {
  id : any;
  nombre : string;
  puntos : number;

  constructor(nombre : string){
    this.nombre = nombre;
    this.puntos = 0;
  }
}
