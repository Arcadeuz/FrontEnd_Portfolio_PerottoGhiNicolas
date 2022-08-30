import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  frases = [
          {frase:"Todo se puede resolver con el Algoritmo correcto.", autor: "Nico Perotto Ghi"},
          {frase:"El hardware es lo que hace a una máquina rápida; el software es lo que hace que una máquina rápida se vuelva lenta",  autor:"Craig Bruce"},
          {frase:"¿Dónde está la tecla 'ANY'?",  autor:"Homero Simpson"},
          {frase:"<blink> Era una broma, Si hubiéramos pensado que iba a usarse no la habríamos escrito", autor:"Mark Andreesen"},
          {frase:"En el futuro es posible que los ordenadores no pesen más de 1,5 toneladas", autor: "Popular mechanics, 1949"},
          {frase:"La mejor forma de obtener información correcta en Intenet es enviar algo incorrecto y esperar las correcciones", autor: "Buda Gautama"},
          {frase:"En mi maquina si funciona", autor:"Yo,tu,él,nosotros,vosotros,ellos"}

  ];
 nFrase = 0;

  constructor() { }

  ngOnInit(): void {
    this.nFrase = this.random(0,this.frases.length-1);
  }


  random(min: number, max: number):number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
