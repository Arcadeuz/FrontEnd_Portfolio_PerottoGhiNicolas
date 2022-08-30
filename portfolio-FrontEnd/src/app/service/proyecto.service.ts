import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { appConfigs } from '../app-config';
import { Proyecto } from '../model/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  pryURL = appConfigs.URL+"/proyecto";

  constructor(private httpClient: HttpClient) { }

  public listAll(): Observable<Proyecto[]> {
    return this.httpClient.get<Proyecto[]>(this.pryURL + "/lista")
  }

  public list(personaId:number): Observable<Proyecto[]> {
    return this.httpClient.get<Proyecto[]>(this.pryURL + `/lista/${personaId}`)
  }

  public detail(id: number): Observable<Proyecto> {
    return this.httpClient.get<Proyecto>(this.pryURL + `/detalle/${id}`)
  }

  public save(personaId:number, proyecto: Proyecto): Observable<any> {
    return this.httpClient.post<any>(this.pryURL + `/crear/${personaId}`, proyecto)
  }

  public update(id: number, proyecto: Proyecto): Observable<any> {
    return this.httpClient.put<any>(this.pryURL + `/actualizar/${id}`,proyecto);

  }

  public delete(id: number):Observable<any>{
    return this.httpClient.delete<any>(this.pryURL + `/borrar/${id}`);
  }

}
