import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionPersonasComponent } from './informacion-personas.component';

describe('InformacionPersonasComponent', () => {
  let component: InformacionPersonasComponent;
  let fixture: ComponentFixture<InformacionPersonasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformacionPersonasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformacionPersonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
