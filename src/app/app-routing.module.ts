import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
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
    component: SorteioPage,
    loadChildren: () => import('./pages/sorteio/sorteio.module').then( m => m.SorteioPageModule)
  },
  {
    path: 'paint',
    component: PaintPage,
    loadChildren: () => import('./pages/paint/paint.module').then( m => m.PaintPageModule)
  },
  {
    path: 'lista',
    component: ListaPage,
    loadChildren: () => import('./pages/lista/lista.module').then( m => m.ListaPageModule)
  },
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
