import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionPersonasComponent } from './gestion-personas.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('GestionPersonasComponent', () => {
  let component: GestionPersonasComponent;
  let fixture: ComponentFixture<GestionPersonasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GestionPersonasComponent],
      imports: [ReactiveFormsModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(GestionPersonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
