import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/service/session.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  @Input() mode = "";
  @Input() idComponent : number | undefined;
  isVisible = false;
  constructor( private router:Router, private sessionService: SessionService) { }

  ngOnInit(): void {
    if (this.sessionService.checkMyPersona()) this.isVisible = true;
  }

  routerTo():void{
    this.router.navigate(['/editar'], { queryParams: { id: this.idComponent , mode : this.mode } });
  } 

}