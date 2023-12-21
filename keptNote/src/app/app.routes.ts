import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./initial/login/login.component').then((c) => c.LoginComponent),
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./views/home/home.component').then((c) => c.HomeComponent),

    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard',
      },
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./views/home/dashboard/dashboard.component').then(
            (c) => c.DashboardComponent
          ),
      },
      {
        path: 'staff/detail',
        loadComponent: () =>
          import('./views/home/staff/detail/detail.component').then(
            (c) => c.DetailComponent
          ),
      },
      {
        path: 'staff/view',
        loadComponent: () =>
          import('./views/home/staff/view/view.component').then(
            (c) => c.ViewComponent
          ),
      },
    ],
  },

  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },

  //   {
  //     path: '**',
  //     loadComponent: () =>
  //       import('./common/templates/page-not-found/page-not-found.component').then(
  //         (c) => c.PageNotFoundComponent
  //       ),
  //   },
];
