import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/layout/header/header.component';
import { HomeComponent } from './components/pages/home/home.component';
import { HomeHeaderComponent } from './components/layout/home-header/home-header.component';
import { HomeFooterComponent } from './components/layout/home-footer/home-footer.component';
import { HomeAccordianComponent } from './components/layout/home-accordian/home-accordian.component';
import { HomeMapComponent } from './components/layout/home-map/home-map.component';


import { MatButtonModule, MatCheckboxModule, MatToolbarModule } from '@angular/material';
// import { MatMenuModule } from '@angular/material/menu';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    HomeHeaderComponent,
    HomeFooterComponent,
    HomeAccordianComponent,
    HomeMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
