import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/service/session.service';

@Component({
  selector: 'app-go',
  templateUrl: './go.component.html',
  styleUrls: ['./go.component.css']
})
export class GoComponent implements OnInit {
  @Input() idComponent : number | undefined;
  @Input() mode = "";
  @Input() route = "";
  @Input() name = "VISITAR";
  @Input() other = "";

  isVisible = false;
  constructor( private router:Router, private sessionService: SessionService) { }

  ngOnInit(): void {
    if (this.sessionService.checkMyPersona()) this.isVisible = true;
  }

  routerTo():void{
   //this.router.navigate([''+this.route], { queryParams: { id: this.idComponent, mode: this.mode} });
    window.location.href = ''+this.route+"/?id="+this.idComponent+"&mode="+this.mode+"&other="+this.other;
  } 
}