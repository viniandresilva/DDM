import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CameraPage } from './camera.page';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([{
      path: '',
      component: CameraPage
    }]),
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [CameraPage]
})
export class CameraPageModule {}
