import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CapturaDataService {

  private contenido = new BehaviorSubject("");
  public valorCompartido = this.contenido.asObservable();

  constructor() { }

  getData(nombre: string){
    this.contenido.next(nombre);
  }
}
