import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { appConfigs } from '../app-config';
import { Persona } from '../model/persona';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  perURL = appConfigs.URL+"/persona"
  personaId = 1;
  sessionService: SessionService | undefined;
  constructor(private httpClient: HttpClient) { }
  
  public getPersona(personaId: number): Observable<Persona>{
    return this.httpClient.get<Persona>(this.perURL + `/detalle/${personaId}`)
  }

  public listAll(): Observable<Persona[]> {
    return this.httpClient.get<Persona[]>(this.perURL + "/lista")
  }

  public list(): Observable<Persona[]> {
    return this.httpClient.get<Persona[]>(this.perURL + "/miLista")
  }

  public detail(id: number): Observable<Persona> {
    return this.httpClient.get<Persona>(this.perURL + `/detalle/${id}`)
  }

  public save(id:number, persona: Persona): Observable<any> {//id lo voy a usar para control luego
    return this.httpClient.post<any>(this.perURL + "/crear", persona)
  }

  public update(id: number, persona: Persona): Observable<any> {
    return this.httpClient.put<any>(this.perURL + `/actualizar/${id}`,persona);

  }

  public delete(id: number):Observable<any>{
    return this.httpClient.delete<any>(this.perURL + `/borrar/${id}`);
  }
}