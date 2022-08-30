import { Component, OnInit } from '@angular/core';
import { Social } from 'src/app/model/social';
import { SessionService } from 'src/app/service/session.service';
import { SocialService } from 'src/app/service/social.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  social: Social[] = [];
  constructor(private socialService: SocialService, private sessionService: SessionService) { }


  ngOnInit(): void {
    this.cargarExperiencia();
  }
  cargarExperiencia(): void {
    let personaId = this.sessionService.getVisiblePersonaId();
    this.socialService.list(personaId).subscribe(data => { this.social = data; })
  }

}
