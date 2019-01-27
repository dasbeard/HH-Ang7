import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { LoginPageComponent } from './components/pages/logReg/login-page/login-page.component';
import { LoginComponent } from './components/pages/logReg/login/login.component';
import { RegisterComponent } from './components/pages/logReg/register/register.component';
import { LocationComponent } from './components/pages/location/location.component';



const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
    children: []
  },
  {
    path: 'login',
    component: LoginPageComponent,
    children: [
      { path: '', pathMatch: 'full', component: LoginComponent },
      { path: 'register', pathMatch: 'full', component: RegisterComponent },
    ]
  },

  // TODO: Make Dynamic
  {
    path: 'location',
    // pathMatch: 'full',
    component: LocationComponent,
    children: []
  },


  {
    path: 'home',
    pathMatch: 'full',
    redirectTo: ''
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
