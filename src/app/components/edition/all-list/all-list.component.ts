import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/service/session.service';

@Component({
  selector: 'app-all-list',
  templateUrl: './all-list.component.html',
  styleUrls: ['./all-list.component.css']
})
export class AllListComponent implements OnInit {
  @Input() mode = "";
  @Input() idComponent : number | undefined;
  isVisible = false;
  constructor( private router:Router, private sessionService: SessionService) { }

  ngOnInit(): void {
    if (this.sessionService.checkAdmin()) this.isVisible = true;
  }

  routerTo():void{
    this.router.navigate(['/lista'], { queryParams: { mode : "Experiencia" } });
  }
} 
