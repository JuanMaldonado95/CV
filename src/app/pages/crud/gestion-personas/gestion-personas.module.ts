import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionPersonasRoutingModule } from './gestion-personas-routing.module';
import { DragableColumnDirective } from './dragable/dragable';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';


@NgModule({
  declarations: [DragableColumnDirective],
  imports: [
    CommonModule,
    GestionPersonasRoutingModule,
    MatDatepickerModule,
    MatNativeDateModule
  ]
})
export class GestionPersonasModule { }
