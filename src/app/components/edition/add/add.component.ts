import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/service/session.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  @Input() mode = "";


  isVisible = false;
  constructor( private router:Router, private sessionService: SessionService) { }

  ngOnInit(): void {
    if (this.sessionService.checkMyPersona()) this.isVisible = true;
  }

  routerTo():void{
    this.router.navigate(['/nueva'], { queryParams: { mode: this.mode } });
  } 
}