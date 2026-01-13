import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => {
      return import('./home/home').then((m) => m.Home);
    },
  },
  {
    path: 'todos',
    loadComponent: async () => {
      const t = await import('./todos/todos');
      return t.Todos;
    },
  },
];
