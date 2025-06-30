import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Base'
    },
    children: [
      {
        path: '',
        redirectTo: 'cards',
        pathMatch: 'full'
      },
      {
        path: 'accordion',
        loadComponent: () => import('./accordion/accordions.component').then(m => m.AccordionsComponent),
        data: {
          title: 'Services'
        }
      },
      {
        path: 'breadcrumbs',
        loadComponent: () => import('./breadcrumbs/breadcrumbs.component').then(m => m.BreadcrumbsComponent),
        data: {
          title: 'IndianClients'
        }
      },
      {
        path: 'cards',
        loadComponent: () => import('./cards/cards.component').then(m => m.CardsComponent),
        data: {
          title: 'International Clients'
        }
      },
      {
        path: 'carousel',
        loadComponent: () => import('./carousels/carousels.component').then(m => m.CarouselsComponent),
        data: {
          title: 'Capacity Master'
        }
      },
      {
        path: 'collapse',
        loadComponent: () => import('./collapses/collapses.component').then(m => m.CollapsesComponent),
        data: {
          title: 'About Floor Tech'
        }
      },
      {
        path: 'list-group',
        loadComponent: () => import('./list-groups/list-groups.component').then(m => m.ListGroupsComponent),
        data: {
          title: 'Contact Info'
        }
      },
      {
        path: 'navs',
        loadComponent: () => import('./navs/navs.component').then(m => m.NavsComponent),
        data: {
          title: 'Team Master'
        }
      },
      {
        path: 'pagination',
        loadComponent: () => import('./paginations/paginations.component').then(m => m.PaginationsComponent),
        data: {
          title: 'Work Gallry Master'
        }
      },
      {
        path: 'placeholder',
        loadComponent: () => import('./placeholders/placeholders.component').then(m => m.PlaceholdersComponent),
        data: {
          title: 'Clienet Feedback Master'
        }
      },
      
    ]
  }
];


