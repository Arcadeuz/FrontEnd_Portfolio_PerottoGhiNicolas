import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { appConfigs } from '../app-config';
import { JwtDto } from '../model/jwt-dto';
import { LoginUsuario } from '../model/login-usuario';
import { NuevoUsuario } from '../model/nuevo-usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authURL = appConfigs.URL +"/auth"

  constructor(private httpClient: HttpClient) { }

  public login(loginUsuario: LoginUsuario):Observable<JwtDto>{
    return this.httpClient.post<JwtDto>(this.authURL+"/login", loginUsuario);
  } 

  public save(personaId:number, nuevoUsuario: NuevoUsuario): Observable<any> {//personaId, lo voy a usar para control luego
    return this.httpClient.post<any>(this.authURL+"/nuevo", nuevoUsuario);
  }
}
