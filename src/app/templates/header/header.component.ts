import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, HostBinding, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @ViewChild('sidenav') sidenav?: MatSidenav;
  
  opened?: boolean;
  
  constructor() { }

  ngOnInit() {
  }

  clickHandler() {
    this.sidenav?.close();
  }

}
