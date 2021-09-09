import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IMCPage } from './imc.page';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([{
      path: '',
      component: IMCPage
    }]),
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [IMCPage]
})
export class IMCPageModule {}
