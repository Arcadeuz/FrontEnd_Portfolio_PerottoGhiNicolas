import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';
import { SessionService } from 'src/app/service/session.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  cargado = false;
  centrado = false;
  educacion: Educacion[] = [];
  @ViewChild('educaciones') div!: ElementRef;
 
  constructor(private educacionService: EducacionService, private sessionService: SessionService) { }

  ngOnInit(): void {
    //this.cargarExperiencia();
  }

  cargarExperiencia(): void {
    if(!this.cargado){
      let personaId = this.sessionService.getVisiblePersonaId();
      this.educacionService.list(personaId).subscribe(data => { this.educacion = data; })
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