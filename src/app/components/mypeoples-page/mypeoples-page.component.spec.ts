import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MypeoplesPageComponent } from './mypeoples-page.component';

describe('MypeoplesPageComponent', () => {
  let component: MypeoplesPageComponent;
  let fixture: ComponentFixture<MypeoplesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MypeoplesPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MypeoplesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
