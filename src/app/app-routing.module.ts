import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { BlocoNotasPage } from './pages/bloco-notas/bloconotas.page';
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
    path: 'listapersonalizada',
    loadChildren: () => import('./pages/lista-personalizada/lista-personalizada.module').then( m => m.ListaPersonalizadaPageModule)
  },
  {
    path: 'bloconotas',
    loadChildren: () => import('./pages/bloco-notas/bloconotas.module').then( m => m.BlocoNotasPageModule)
  },
  {
    path: 'imc',
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/imc/imc.module').then( m => m.IMCPageModule)
      },
      {
        path: 'resultado',
        loadChildren: () => import('./pages/imc/resultado-imc/resultado-imc.module').then( m => m.ResultadoIMCPageModule)
      }
    ]
  },
  {
    path: 'camera',
    loadChildren: () => import('./pages/camera/camera.module').then( m => m.CameraPageModule)
  },
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
