import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { appConfigs } from '../app-config';
import { Experiencia } from '../model/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  expURL = appConfigs.URL+"/experiencia"

  constructor(private httpClient: HttpClient) { }

  public listAll(): Observable<Experiencia[]> {
    return this.httpClient.get<Experiencia[]>(this.expURL + "/lista")
  }

  public list(personaId:number): Observable<Experiencia[]> {
    return this.httpClient.get<Experiencia[]>(this.expURL + `/lista/${personaId}`)
  }

  public detail(id: number): Observable<Experiencia> {
    return this.httpClient.get<Experiencia>(this.expURL + `/detalle/${id}`)
  }

  public save(personaId:number, experiencia: Experiencia): Observable<any> {
    return this.httpClient.post<any>(this.expURL + `/crear/${personaId}`, experiencia)
  }

  public update(id: number, experiencia: Experiencia): Observable<any> {
    return this.httpClient.put<any>(this.expURL + `/actualizar/${id}`,experiencia);

  }

  public delete(id: number):Observable<any>{
    return this.httpClient.delete<any>(this.expURL + `/borrar/${id}`);
  }

}
