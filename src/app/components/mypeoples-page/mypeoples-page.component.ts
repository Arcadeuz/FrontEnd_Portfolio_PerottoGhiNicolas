import { Component, OnInit } from '@angular/core';
import { appConfigs } from 'src/app/app-config';
import { Persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/service/persona.service';
import { SessionService } from 'src/app/service/session.service';

@Component({
  selector: 'app-mypeoples-page',
  templateUrl: './mypeoples-page.component.html',
  styleUrls: ['./mypeoples-page.component.css']
})
export class MypeoplesPageComponent implements OnInit {
  persona: Persona[] = [];
  url = window.location.origin + "/?id=";
  constructor(private personaService: PersonaService,private sessionService: SessionService) { }

  ngOnInit(): void {
    this.cargarMisPersonas();
  }
  cargarMisPersonas(): void {
    this.sessionService.setMyOwnerToPersonaOwner();
    this.personaService.list().subscribe(data => { this.persona = data; })
  }
}
