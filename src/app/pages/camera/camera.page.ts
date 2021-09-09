import { DecimalPipe } from '@angular/common';
import { ThrowStmt } from '@angular/compiler';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Route, Router, RouterModule } from '@angular/router';
import { MenuController, NavController, Platform, ToastController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
})
export class CameraPage  {
  base64Image: string;

  constructor(
    private platform: Platform,
    private toast: ToastController,
    private navCtrl: NavController,
    private camera: Camera) {}

  async takePicture() {
       // Create options for the Camera Dialog
       const options = {
        quality: 100,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        sourceType: this.camera.PictureSourceType.CAMERA,
        saveToPhotoAlbum: true,
        correctOrientation: true,
        targetHeight: 1024,
        targetWidth: 768
      };

      this.camera.getPicture(options).then((imageData) => {
        // imageData is either a base64 encoded string or a file URI
        this.base64Image = 'data:image/jpeg;base64,' + imageData;
      }, async (err) => {
        const toast = await this.toast.create({
          header: 'Erro',
          message: 'Não foi possível abrir a câmera!',
          position: 'bottom',
          color: 'danger',
          duration: 5000,
          buttons: [
            {
              text: 'OK',
              role: 'cancel',
              handler: () => {
                console.log('Cancel clicked');
              }
            }
          ]
        });

        await toast.present();
      });
  }
}
