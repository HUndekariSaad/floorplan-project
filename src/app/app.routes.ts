import { Routes } from '@angular/router';
import { HomeComponent } from './website/views/home/home.component';
import { WebsiteLayoutComponent } from './website/layout/website-layout/website-layout.component';
import { ServicesComponent } from './website/views/services/services.component';
import { ContactUsComponent } from './website/views/contact-us/contact-us.component';
import { AboutUsComponent } from './website/views/about-us/about-us.component';
export const routes: Routes = [

{
    path: '',
    component: WebsiteLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'about', component: AboutUsComponent },
      { path: 'service', component: ServicesComponent },
      { path: 'contact', component: ContactUsComponent },
    ]
  },

  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: '',
    loadComponent: () => import('./layout').then(m => m.DefaultLayoutComponent),
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
