import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponent } from './about.component';

import { MatIconModule } from '@angular/material/icon';
import { IonicModule } from '@ionic/angular';



describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutComponent],
      imports: [MatIconModule, IonicModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
