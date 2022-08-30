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
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit {
  model: any;
  service: any;

  config: any;
  categorias: Array<string> = ["Social","Experiencia", "Educacion", "Habilidad", "Proyecto", "Persona"];

  isAdmin = false;
  showAll = true;
  personaId = 0;

  constructor(private router: Router, private activatedRouter: ActivatedRoute, private httpClient: HttpClient,
    private sessionService: SessionService) { }

  ngOnInit(): void {
    this.activatedRouter.queryParams.subscribe((params) => {
      this.config = params;
    });
    this.personaId = this.sessionService.getVisiblePersonaId();
    this.showAll = this.config['other'] != "no";
    this.isAdmin = this.sessionService.checkAdmin();
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

    this.cargarLista();
  }
  cargarLista(): void {
    if (this.isAdmin && this.showAll) {
      this.service.listAll().subscribe((data: any) => { this.model = data; });
    } else {
      this.service.list(this.personaId).subscribe((data: any) => { this.model = data; });
    }
  }
}
