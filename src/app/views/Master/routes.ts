import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Master'
    },
    children: [
      {
        path: '',
        redirectTo: 'cards',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadComponent: () => import('./home master/home-master/home-master.component').then(m => m.HomeMasterComponent),
        data: {
          title: 'Home'
        }
      },
      {
        path: 'service',
        loadComponent: () => import('./service-master/service-master/service-master.component').then(m => m.ServiceMasterComponent),
        data: {
          title: 'Service'
        }
      },
      {
        path: 'contactus',
        loadComponent: () => import('./contact-us master/contactus-master/contactus-master.component').then(m => m.ContactusMasterComponent),
        data: {
          title: 'Contact Us'
        }
      },
      {
        path: 'aboutus',
        loadComponent: () => import('./about-us/aboutus-master/aboutus-master.component').then(m => m.AboutusMasterComponent),
        data: {
          title: 'About Us'
        }
      },
      {
        path: 'client',
        loadComponent: () => import('./clienet-testimonial/client-master/client-master.component').then(m => m.ClientMasterComponent),
        data: {
          title: 'Client Testimonial'
        }
      }, 
         {
        path: 'IndianClient',
        loadComponent: () => import('./Indian-client/indianclientmaster/indianclientmaster.component').then(m => m.IndianclientmasterComponent),
        data: {
          title: 'Indian Clinet'
        }
      },
       {
        path: 'IndianLogoClient',
        loadComponent: () => import('./Indian-client-logo/indianclientlogomaster/indianclientlogomaster.component').then(m => m.IndianclientlogomasterComponent),
        data: {
          title: 'Indian Client Logo'
        }
      },
      
    ]
  }
];


