import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/service/persona.service';
import { SessionService } from 'src/app/service/session.service';

@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.component.html',
  styleUrls: ['./acercade.component.css']
})
export class AcercadeComponent implements OnInit {
  persona: Persona  = new Persona("","","","","");

  constructor(public personaService: PersonaService, private sessionService: SessionService) { }

  ngOnInit(): void {
    this.cargarPersona();
  }

  cargarPersona(): void {
    let personaId = this.sessionService.getVisiblePersonaId();
    this.personaService.getPersona(personaId).subscribe(data => {
      this.persona = data;
      this.sessionService. setVisiblePersonaOwner(data.propietario!);
      document.documentElement.style.setProperty(`--main-color`, data.color!); 

    });
    
  }
}
