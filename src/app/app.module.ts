import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/layout/header/header.component';
import { HomeComponent } from './components/pages/home/home.component';
import { HomeHeaderComponent } from './components/layout/home-header/home-header.component';
import { HomeFooterComponent } from './components/layout/home-footer/home-footer.component';
import { HomeAccordianComponent } from './components/layout/home-accordian/home-accordian.component';
import { HomeMapComponent } from './components/layout/home-map/home-map.component';
import { LoginPageComponent } from './components/pages/logReg/login-page/login-page.component';
import { LoginComponent } from './components/pages/logReg/login/login.component';
import { RegisterComponent } from './components/pages/logReg/register/register.component';
import { LocationComponent } from './components/pages/location/location.component';
import { ServicesComponent } from './components/layout/services/services.component';


import { MatButtonModule, MatCheckboxModule, MatToolbarModule, MatExpansionModule, MatListModule, MatButtonToggleModule, MatInputModule, MatIconModule, MatFormFieldModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { HoursOfOpTableComponent } from './components/layout/hours-of-op-table/hours-of-op-table.component';
import { ServingFoodTableComponent } from './components/layout/serving-food-table/serving-food-table.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    HomeHeaderComponent,
    HomeFooterComponent,
    HomeAccordianComponent,
    HomeMapComponent,
    LoginPageComponent,
    LoginComponent,
    RegisterComponent,
    LocationComponent,
    ServicesComponent,
    HoursOfOpTableComponent,
    ServingFoodTableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatExpansionModule,
    MatListModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
