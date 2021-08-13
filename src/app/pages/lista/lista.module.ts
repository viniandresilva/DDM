import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaPage } from './lista.page';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([{
      path: '',
      component: ListaPage
    }]),
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [ListaPage]
})
export class ListaPageModule {}
