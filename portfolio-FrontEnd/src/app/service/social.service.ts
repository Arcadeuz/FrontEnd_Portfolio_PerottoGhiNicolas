import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { appConfigs } from '../app-config';
import { Social } from '../model/social';

@Injectable({
  providedIn: 'root'
})
export class SocialService {
  eduURL = appConfigs.URL+"/social"


  constructor(private httpClient: HttpClient) { }

  public listAll(): Observable<Social[]> {
    return this.httpClient.get<Social[]>(this.eduURL + "/lista")
  }

  public list(personaId: number): Observable<Social[]> {
    return this.httpClient.get<Social[]>(this.eduURL + `/lista/${personaId}`)
  }

  public detail(id: number): Observable<Social> {
    return this.httpClient.get<Social>(this.eduURL + `/detalle/${id}`)
  }

  public save(personaId: number, social: Social): Observable<any> {
    return this.httpClient.post<any>(this.eduURL + `/crear/${personaId}`, social)
  }

  public update(id: number, social: Social): Observable<any> {
    return this.httpClient.put<any>(this.eduURL + `/actualizar/${id}`, social);

  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.eduURL + `/borrar/${id}`);
  }
}