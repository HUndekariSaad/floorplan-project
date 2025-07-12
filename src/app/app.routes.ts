import { Routes } from '@angular/router';
import { HomeComponent } from './website/views/home/home.component';
import { WebsiteLayoutComponent } from './website/layout/website-layout/website-layout.component';
import { ContactUsComponent } from './website/views/contact-us/contact-us.component';
import { AboutUsComponent } from './website/views/about-us/about-us.component';
import { MainServicesComponent } from './website/views/main-services/main-services.component';
import { ServicesComponent } from './website/views/main-services/services/services.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AuthGuard } from './auth/auth.guard';
export const routes: Routes = [

{
    path: '',
    component: WebsiteLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'about', component: AboutUsComponent },
      { path: 'services', component: MainServicesComponent },
      { path: 'service', component: ServicesComponent },
      { path: 'contact', component: ContactUsComponent },
    ]
  },

  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },

  
   { path: 'login', component: LoginComponent },
   { path: 'register', component: RegisterComponent },
  {
    path: '',
    loadComponent: () => import('./layout').then(m => m.DefaultLayoutComponent),
     canActivate: [AuthGuard],
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./views/dashboard/routes').then((m) => m.routes)
      },
       {
        path: 'dashboard',
        loadChildren: () => import('./views/dashboard/routes').then((m) => m.routes)
      },
      {
        path: 'notifications',
        loadChildren: () => import('./views/notifications/routes').then((m) => m.routes)
      },
      {
        path: 'Master',
        loadChildren: () => import('./views/Master/routes').then((m) => m.routes)
      },
      
    ]
  },
  { path: '**', redirectTo: 'dashboard' }
];
