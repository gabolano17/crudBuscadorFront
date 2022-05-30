import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../models/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  url: string = 'http://localhost:9090/personas';

  constructor(private http: HttpClient) { }

  getData():Observable<Persona[]>{
    return this.http.get<Persona[]>(this.url);
  }
  postData(persona: Persona):Observable<Persona>{
    return this.http.post<Persona>(this.url, persona);
  }
  getDataId(id: number):Observable<Persona>{
    return this.http.get<Persona>(`${this.url}/${id}`);
  }
  putData(persona: Persona):Observable<Persona>{
    return this.http.put<Persona>(`${this.url}/${persona.id}`, persona);
  }
  deleteData(id: number):Observable<Persona>{
    return this.http.delete<Persona>(`${this.url}/${id}`)
  }
}
