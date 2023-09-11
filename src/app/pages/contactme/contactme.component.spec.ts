import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactmeComponent } from './contactme.component';
import { MatIconModule } from '@angular/material/icon';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';


describe('ContactmeComponent', () => {
  let component: ContactmeComponent;
  let fixture: ComponentFixture<ContactmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactmeComponent ],
      imports: [MatIconModule, IonicModule, ReactiveFormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


