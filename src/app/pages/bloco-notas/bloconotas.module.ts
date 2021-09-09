import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BlocoNotasPage } from './bloconotas.page';
import { RouterModule } from '@angular/router';
import { ModalAnotacaoPage } from './modal-anotacao/modal-anotacao.page';

@NgModule({
  imports: [
    RouterModule.forChild([{
      path: '',
      component: BlocoNotasPage
    }]),
    CommonModule,
    FormsModule,
    IonicModule
  ],
  declarations: [BlocoNotasPage, ModalAnotacaoPage]
})
export class BlocoNotasPageModule {}
