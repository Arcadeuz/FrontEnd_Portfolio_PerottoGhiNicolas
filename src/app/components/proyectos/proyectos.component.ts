import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';
import { SessionService } from 'src/app/service/session.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  centrado = false;
  proyecto: Proyecto[] = [];
  @ViewChild('proyectos') div!: ElementRef;

  constructor(private proyectoService: ProyectoService, private sessionService: SessionService) { }

  ngOnInit(): void {
    this.cargarExperiencia();
  }

  action(event: any): void {
    alert("aca");
    if (event.value) {
      alert("aca");
    }
  }
  cargarExperiencia(): void {
    let personaId = this.sessionService.getVisiblePersonaId();
    this.proyectoService.list(personaId).subscribe(data => { this.proyecto = data; })
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event: any) {
    const windowHeight = window.innerHeight;
    const boundingRectFive = this.div.nativeElement.getBoundingClientRect();
   
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

