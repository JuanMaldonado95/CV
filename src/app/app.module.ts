import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './templates/header/header.component';
import { FooterComponent } from './templates/footer/footer.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { ContactmeComponent } from './pages/contactme/contactme.component';
import { GestionPersonasComponent } from './pages/crud/gestion-personas/gestion-personas.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { InformacionPersonasComponent } from './pages/crud/informacion-personas/informacion-personas.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatPaginatorModule } from '@angular/material/paginator';

import { HttpClientModule } from '@angular/common/http';
import { NbPasswordAuthStrategy, NbAuthModule, NbDummyAuthStrategy } from '@nebular/auth';
import { NbThemeModule, NbLayoutModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { post } from 'jquery';
import { ConfirmDialogComponent } from './pages/crud/informacion-personas/confirm-dialog/confirm-dialog.component';
import { MatNativeDateModule } from '@angular/material/core';
import { HeaderModule } from './templates/header/header.module';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SkillsComponent,
    ContactmeComponent,
    GestionPersonasComponent,
    LoginComponent,
    RegisterComponent,
    LogoutComponent,
    InformacionPersonasComponent,
    ConfirmDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    MatToolbarModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatDatepickerModule,
    MatCardModule,
    MatTableModule,
    MatDialogModule,
    MatCheckboxModule,
    HttpClientModule,
    MatNativeDateModule,
    MatPaginatorModule,
    HeaderModule

    // HttpClientModule,
    // NbAuthModule.forRoot({
    //   strategies: [
    //     NbDummyAuthStrategy.setup({
    //       name: 'dummy',
    //     }),

    //     // --------------------------------------------------- Para cuando se tenga el backend

    //     // NbPasswordAuthStrategy.setup({
    //     //   name: 'backNet',

    //     //   baseEndpoint: 'http://example.com/app-api/v1', //Ruta del backend
    //     //   login: {
    //     //     endpoint: '/auth/sign-in',
    //     //     method: 'post',
    //     //   },
    //     //   register: {
    //     //     endpoint: '/auth/sign-up',
    //     //     method: 'post',
    //     //   },
    //     //   logout: {
    //     //     endpoint: '/auth/sign-out',
    //     //     method: 'post',
    //     //   },
    //     //   requestPass: {
    //     //     endpoint: '/auth/request-pass',
    //     //     method: 'post',
    //     //   },
    //     //   resetPass: {
    //     //     endpoint: '/auth/reset-pass',
    //     //     method: 'post',
    //     //   },
    //     // }),
    //   ],

    //   forms: {},
    // }),
    // NbThemeModule.forRoot({ name: 'default' }),
    // NbLayoutModule,
    // NbEvaIconsModule,
  ],
  providers: [MatNativeDateModule, MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
