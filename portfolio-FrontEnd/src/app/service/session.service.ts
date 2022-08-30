import { Injectable } from '@angular/core';
import { TokenService } from './token.service';

const PERSONA_ID_KEY = "PersonaId";
const PERSONA_OWNER_KEY = "PersonaOwnerName";
/*Esto es para poner todos lo que necesite grabar*/

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private tokenService: TokenService) { }

  public setVisiblePersonaId(personaId: number): void{
    window.sessionStorage.removeItem(PERSONA_ID_KEY);
    window.sessionStorage.setItem(PERSONA_ID_KEY,String(personaId));
  }

  public getVisiblePersonaId(): number{
    let personaId = Number(sessionStorage.getItem(PERSONA_ID_KEY))!;
    return personaId;
  }

  public setVisiblePersonaOwner(personaId: string): void{ //Aca usaré md5 o algo así 
    window.sessionStorage.removeItem(PERSONA_OWNER_KEY);
    window.sessionStorage.setItem(PERSONA_OWNER_KEY,personaId);
  }

  public getVisiblePersonaOwner(): string{
    return sessionStorage.getItem(PERSONA_OWNER_KEY)!;
  }

  public checkMyPersona():boolean {
    return (this.getVisiblePersonaOwner() == this.tokenService.getUserName()) || this.checkAdmin();
  }

  public checkAdmin():boolean {
    return this.tokenService.getAuthorities().includes('ROLE_ADMIN');
  }

  public setMyOwnerToPersonaOwner(): void{
    this.setVisiblePersonaOwner(this.tokenService.getUserName());
  }
}