import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Habilidad } from 'src/app/model/habilidad';
import { HabilidadService } from 'src/app/service/habilidad.service';
import { SessionService } from 'src/app/service/session.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {
  cargado = false;
  centrado = false;
  habilidad: Habilidad[] = [];
  @ViewChild('habilidades') div!: ElementRef;
  constructor(private habilidadService: HabilidadService, private sessionService: SessionService) { }

  ngOnInit(): void {
    //this.cargarHabilidad();
  }
  cargarHabilidad(): void {
    if(!this.cargado){
      let personaId = this.sessionService.getVisiblePersonaId();
      this.habilidadService.list(personaId).subscribe(data => { this.habilidad = data; })
      this.cargado = true;
    }
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event: any) {
    const windowHeight = window.innerHeight;
    const boundingRectFive = this.div.nativeElement.getBoundingClientRect();
    
    if (boundingRectFive.top <= windowHeight) this.cargarHabilidad();
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
