import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EducacionService } from 'src/app/service/educacion.service';
import { ExperienciaService } from 'src/app/service/experiencia.service';
import { HabilidadService } from 'src/app/service/habilidad.service';
import { PersonaService } from 'src/app/service/persona.service';
import { ProyectoService } from 'src/app/service/proyecto.service';
import { SessionService } from 'src/app/service/session.service';
import { SocialService } from 'src/app/service/social.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  @Input() mode = "";
  @Input() idComponent: number | undefined;
  service: any;

  isVisible = false;
  constructor(private router: Router, private sessionService: SessionService, private httpClient: HttpClient) { }


  ngOnInit(): void {
    if (this.sessionService.checkMyPersona()) this.isVisible = true;

    switch (this.mode) {
      case "Social": {
        this.service = new SocialService(this.httpClient);
        break;
      }case "Experiencia": {
        this.service = new ExperienciaService(this.httpClient);
        break;
      } case "Educacion": {
        this.service = new EducacionService(this.httpClient);
        break;
      } case "Habilidad": {  
        this.service = new HabilidadService(this.httpClient);
        break;
      } case "Proyecto": {
        this.service = new ProyectoService(this.httpClient);
        break; 
      } case "Persona": {
        this.service = new PersonaService(this.httpClient);
        break;   
      } default: {
        alert("Error");
      }
    }

  }

  delete(): void {
    if (this.idComponent != undefined) {
      if (confirm('Esta seguro de Borrar este/a '+ this.mode)) {
        this.service.delete(this.idComponent).subscribe(
          (data: any) => {
            window.location.reload()
            
          },
          (err: any) => {
            alert("No se pudo borrar este/a "+ this.mode);
          }
        )
      }
    }
  }


}