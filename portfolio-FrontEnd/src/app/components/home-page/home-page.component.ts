import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SessionService } from 'src/app/service/session.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private sessionService: SessionService, private activatedRouter: ActivatedRoute,) { }

  ngOnInit(): void {

    this.activatedRouter.queryParams.subscribe((params) => {
      if (params['id']) {
        this.sessionService.setVisiblePersonaId(params['id']);
      } else {
        if (!this.sessionService.getVisiblePersonaId()) {
          this.sessionService.setVisiblePersonaId(1);
        }

      }
    });
  }
}
