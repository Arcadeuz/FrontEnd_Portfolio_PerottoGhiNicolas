import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularyPageComponent } from './formulary-page.component';

describe('FormularyPageComponent', () => {
  let component: FormularyPageComponent;
  let fixture: ComponentFixture<FormularyPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularyPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
