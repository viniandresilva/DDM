import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IMCPage } from './resultado-imc.page';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([{
      path: ':peso/:altura',
      component: IMCPage
    }]),
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [IMCPage]
})
export class ResultadoIMCPageModule {}
