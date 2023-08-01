// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { ConfirmDialogComponent } from './confirm-dialog.component';

// describe('ConfirmDialogComponent', () => {
//   let component: ConfirmDialogComponent;
//   let fixture: ComponentFixture<ConfirmDialogComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ ConfirmDialogComponent ]
//     })
//     .compileComponents();

//     fixture = TestBed.createComponent(ConfirmDialogComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });


import { MatDialogModule } from '@angular/material/dialog';
import { TestBed } from '@angular/core/testing';
import { ConfirmDialogComponent } from './confirm-dialog.component';

describe('TuComponente', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MatDialogModule],
      declarations: [ConfirmDialogComponent]
    });
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(ConfirmDialogComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

});
