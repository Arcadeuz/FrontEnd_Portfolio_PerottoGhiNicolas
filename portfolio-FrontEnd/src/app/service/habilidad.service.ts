import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { appConfigs } from '../app-config';
import { Habilidad } from '../model/habilidad';

@Injectable({
  providedIn: 'root'
})
export class HabilidadService {
  habURL = appConfigs.URL +"/habilidad"

  constructor(private httpClient: HttpClient) { }

  public listAll(): Observable<Habilidad[]> {
    return this.httpClient.get<Habilidad[]>(this.habURL + "/lista")
  }

  public list(personaId:number): Observable<Habilidad[]> {
    return this.httpClient.get<Habilidad[]>(this.habURL + `/lista/${personaId}`)
  }

  public detail(id: number): Observable<Habilidad> {
    return this.httpClient.get<Habilidad>(this.habURL + `/detalle/${id}`)
  }

  public save(personaId:number, habilidad: Habilidad): Observable<any> {
    return this.httpClient.post<any>(this.habURL + `/crear/${personaId}`, habilidad)
  }

  public update(id: number, habilidad: Habilidad): Observable<any> {
    return this.httpClient.put<any>(this.habURL + `/actualizar/${id}`,habilidad);

  }

  public delete(id: number):Observable<any>{
    return this.httpClient.delete<any>(this.habURL + `/borrar/${id}`);
  }

}