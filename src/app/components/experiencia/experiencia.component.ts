import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';
import { SessionService } from 'src/app/service/session.service';


@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  cargado = false;
  centrado = false;
  experiencia: Experiencia[] = [];
  @ViewChild('experiencias') div!: ElementRef;
  constructor(private experinciaService: ExperienciaService, private sessionService: SessionService) { }


  ngOnInit(): void {
    //this.cargarExperiencia(); al sacarlo de ngOnInit mejora sustancialmente el manejo del ancho de banda
    //                          y la actualziacion 
  }
  cargarExperiencia(): void {
    if (!this.cargado){
      let personaId = this.sessionService.getVisiblePersonaId();
      this.experinciaService.list(personaId).subscribe(data => { this.experiencia = data; });
      this.cargado = true;
    }
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event: any) {
    const windowHeight = window.innerHeight;
    const boundingRectFive = this.div.nativeElement.getBoundingClientRect();
    if (boundingRectFive.top <= windowHeight) this.cargarExperiencia();
    if (boundingRectFive.top >= 0 && boundingRectFive.top <= windowHeight/2) {
      this.centrar();
      this.centrado = true;
    }else{
      this.centrado = false;
    }
  }

  centrar():void{
    if(!this.centrado) window.scrollTo(0,this.div.nativeElement.offsetTop-(window.innerHeight/10));
  }
}
