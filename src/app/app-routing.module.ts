import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { BlocoNotasPage } from './pages/blocoNotas/bloconotas.page';
import { ListaPage } from './pages/lista/lista.page';
import { PaintPage } from './pages/paint/paint.page';
import { SorteioPage } from './pages/sorteio/sorteio.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'sorteio',
    pathMatch: 'full'
  },
  {
    path: 'sorteio',
    loadChildren: () => import('./pages/sorteio/sorteio.module').then( m => m.SorteioPageModule)
  },
  {
    path: 'paint',
    loadChildren: () => import('./pages/paint/paint.module').then( m => m.PaintPageModule)
  },
  {
    path: 'lista',
    loadChildren: () => import('./pages/lista/lista.module').then( m => m.ListaPageModule)
  },
  {
    path: 'bloconotas',
    loadChildren: () => import('./pages/bloconotas/bloconotas.module').then( m => m.BlocoNotasPageModule)
  },
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
