import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { Experiencia } from 'src/app/model/experiencia';
import { Habilidad } from 'src/app/model/habilidad';
import { NuevoUsuario } from 'src/app/model/nuevo-usuario';
import { Persona } from 'src/app/model/persona';
import { Proyecto } from 'src/app/model/proyecto';
import { Social } from 'src/app/model/social';
import { AuthService } from 'src/app/service/auth.service';
import { EducacionService } from 'src/app/service/educacion.service';
import { ExperienciaService } from 'src/app/service/experiencia.service';
import { HabilidadService } from 'src/app/service/habilidad.service';
import { PersonaService } from 'src/app/service/persona.service';
import { ProyectoService } from 'src/app/service/proyecto.service';
import { SessionService } from 'src/app/service/session.service';
import { SocialService } from 'src/app/service/social.service';

@Component({
  selector: 'app-formulary-page',
  templateUrl: './formulary-page.component.html',
  styleUrls: ['./formulary-page.component.css']
})
export class FormularyPageComponent implements OnInit {
  model: any;
  service: any;

  config: any;
  object = Object;
  chars = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
  'a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z',
  '1','2','3','4','5','6','7','8','9','0','"','#','$','%','&','/','(',')','='];

  constructor(private router: Router, private activatedRouter: ActivatedRoute, private httpClient: HttpClient,
    private sessionService: SessionService) { }

  ngOnInit(): void {
    this.activatedRouter.queryParams.subscribe((params) => {
      this.config = params;
    });

    switch (this.config['mode']) {
      case "Social": {
        this.model = new Social("", "");
        this.service = new SocialService(this.httpClient);
        break;
      } case "Experiencia": {
        this.model = new Experiencia("", "", 1);
        this.service = new ExperienciaService(this.httpClient);
        break;
      } case "Educacion": {
        this.model = new Educacion("", "");
        this.service = new EducacionService(this.httpClient);
        break;
      } case "Habilidad": {
        this.model = new Habilidad("", 0);
        this.service = new HabilidadService(this.httpClient);
        break;
      } case "Proyecto": {
        this.model = new Proyecto("", "", "", new Date(), new Date());
        this.service = new ProyectoService(this.httpClient);
        break;
      } case "Persona": {
        this.model = new Persona("", "", "", "","");
        this.service = new PersonaService(this.httpClient);
        break;
      } case "Usuario": {
        this.model = new NuevoUsuario("", "", "");
        this.service = new AuthService(this.httpClient);
        break;
      } default: {
        alert("Error de formulario");
        this.router.navigate(['']);
      }
    }

    if (this.config['id']) {
      this.service.detail(this.config['id']).subscribe(
        (data: any) => {
          for (let prop in data) {
            if (prop in this.model) this.model[prop] = data[prop];
          }
        },
        (err: any) => {
          alert("Error al modificar");
          this.router.navigate(['']);
        });
    }


  }

  Enviar(): void {
    let personaId = this.sessionService.getVisiblePersonaId();
    if (this.config['id']) {//es edicion
      this.service.update(this.config['id'], this.model).subscribe(
        (data: any) => {
        }, (err: any) => {
          alert("Error al modificar " + this.config['mode']);
          console.log(err);
        });
    } else {//es nueva
      this.service.save(personaId, this.model).subscribe(
        (data: any) => {
          alert("Añadida nueva " + this.config['mode']);
        }, (err: any) => {
          alert("Fallo al añadir nueva " + this.config['mode']);
          console.log(err);
        });
    }
   // this.router.navigate([''], { queryParams: { id: personaId } });
    window.location.href = ''+"/?id="+personaId;
  }
  
  elementType(aVar: string): string{
    if(["Social"].includes(this.config['mode']) && ["nombre"].includes(aVar)){
      return "select"
    }else{
      return "input"
    }
  }

  inputType(aVar: string): string {
    if (["nombre","apellido","nombreUsuario"].includes(aVar) ) {
      return "text"
    } else  if (["acercaDeMi","descripcion"].includes(aVar) ) {
      return "text"
    } else  if (["duracion"].includes(aVar) ){ 
      return "number"
    } else  if (["porcentaje"].includes(aVar) ){   
      return "range"
    } else  if (["password"].includes(aVar) ){     
      return "password"
    } else  if (["email"].includes(aVar) ){    
      return "email"
    } else  if (["link","fotoPerfil","fotoProyecto"].includes(aVar) ) {  
      return "url"
    } else  if (["fechaInicio","fechaFin"].includes(aVar) ) {    
      return "date"
    } else  if (["color"].includes(aVar) ) {    
      return "color"  
    } else {
      return "hidden";
    }
  }


}