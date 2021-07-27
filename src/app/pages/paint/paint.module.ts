import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaintPage } from './paint.page';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([{
      path: '',
      component: PaintPage
    }]),
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [PaintPage]
})
export class PaintPageModule {}
