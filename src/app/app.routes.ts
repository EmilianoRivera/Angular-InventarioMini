import { Routes } from '@angular/router';
import { ListaDeCategorias } from '../components/features/categorias/lista-de-categorias/lista-de-categorias';
import { CategoriaForm } from '../components/features/categorias/categoria-form/categoria-form';
import { Home } from '../shared/home/home';

export const routes: Routes = [

 { path: '', redirectTo: 'listaCategorias', pathMatch: 'full' },
  {path:'home', component:Home},
  { path: '**', redirectTo: 'listaCategorias' },
  {path: 'listaCategorias', component: ListaDeCategorias },
  { path: 'categoria-form', component: CategoriaForm },
  { path: 'categoria-form/:id', component: CategoriaForm },
];
