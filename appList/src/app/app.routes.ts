import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home/Home',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadComponent: () =>
      import('./folder/folder.page').then((m) => m.FolderPage),
  },
  {
    path: 'lista-alumnos',
    loadComponent: () => import('./pages/lista-alumnos/lista-alumnos.page').then( m => m.ListaAlumnosPage)
  },
  {
    path: 'estadistcas',
    loadComponent: () => import('./pages/estadistcas/estadistcas.page').then( m => m.EstadistcasPage)
  },
  {
    path: 'home/:id',
    loadComponent: () => import('./pages/home/home.page').then( m => m.HomePage)
  },
  {
    path: 'ficha-alumno/:id',
    loadComponent: () => import('./pages/ficha-alumno/ficha-alumno.page').then( m => m.FichaAlumnoPage)
  },
  {
    path: 'registro',
    loadComponent: () => import('./pages/registro/registro.page').then( m => m.RegistroPage)
  },
  {
    path: 'registro-alumno',
    loadComponent: () => import('./pages/registro-alumno/registro-alumno.page').then( m => m.RegistroAlumnoPage)
  },
  {
    path: 'listado-alumno-clase/:id',
    loadComponent: () => import('./pages/listado-alumno-clase/listado-alumno-clase.page').then( m => m.ListadoAlumnoClasePage)
  },
  {
    path: 'listado-cursos',
    loadComponent: () => import('./pages/listado-cursos/listado-cursos.page').then( m => m.ListadoCursosPage)
  },
];
