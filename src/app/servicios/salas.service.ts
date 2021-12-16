import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { environment } from 'src/environments/environment';
import { Sala } from '../clases/sala';

@Injectable({
  providedIn: 'root'
})
export class SalasService {

  private salas: AngularFireList<any>;

  constructor(private http:HttpClient, private firebase:AngularFireDatabase) {
    this.salas = this.firebase.list('Salas');
  }

  traerTodas(){
    return this.salas;
  }

  crearNuevaSala(sala : Sala){
    return this.http.post(`${environment.hostFirebase}/Salas.json`, sala);
  }

  unirseASala(sala : Sala){
    return this.http.patch(`${environment.hostFirebase}/Salas/${sala.id}.json`, {participantes: sala.participantes});
  }



}
