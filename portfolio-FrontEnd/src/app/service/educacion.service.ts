import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { appConfigs } from '../app-config';
import { Educacion } from '../model/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService  {
  eduURL = appConfigs.URL +"/educacion";

  constructor(private httpClient: HttpClient) { }

  public listAll(): Observable<Educacion[]> {
    return this.httpClient.get<Educacion[]>(this.eduURL + "/lista")
  }

  public list(personaId:number): Observable<Educacion[]> {
    return this.httpClient.get<Educacion[]>(this.eduURL + `/lista/${personaId}`)
  }

  public detail(id: number): Observable<Educacion> {
    return this.httpClient.get<Educacion>(this.eduURL + `/detalle/${id}`)
  }

  public save(personaId:number, educacion: Educacion): Observable<any> {
    return this.httpClient.post<any>(this.eduURL + `/crear/${personaId}`, educacion)
  }

  public update(id: number, educacion: Educacion): Observable<any> {
    return this.httpClient.put<any>(this.eduURL + `/actualizar/${id}`,educacion);

  }

  public delete(id: number):Observable<any>{
    return this.httpClient.delete<any>(this.eduURL + `/borrar/${id}`);
  }
}