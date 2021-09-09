import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaPersonalizadaPage } from './lista-personalizada.page';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([{
      path: '',
      component: ListaPersonalizadaPage
    }]),
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [ListaPersonalizadaPage]
})
export class ListaPersonalizadaPageModule {}
