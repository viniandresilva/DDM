import { ThrowStmt } from '@angular/compiler';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuController, Platform, ToastController } from '@ionic/angular';

@Component({
  selector: 'lista',
  templateUrl: './lista-personalizada.page.html',
  styleUrls: ['./lista-personalizada.page.scss'],
})
export class ListaPersonalizadaPage  {

  carros = [
    {
      marca: 'Hyundai',
      modelo: 'Creta',
      versao: 'Ultimate',
      ano: 2022
    },
    {
      marca: 'Honda',
      modelo: 'HRV',
      versao: 'EXL',
      ano: 2020
    },
    {
      marca: 'Chevrolet',
      modelo: 'Tracker',
      versao: 'Premier',
      ano: 2021
    },
    {
      marca: 'Toyota',
      modelo: 'Corolla Cross',
      versao: 'XRX',
      ano: 2019
    },
  ];

  constructor(
    private platform: Platform,
    private toast: ToastController
  ) {}

  async showInfo(carro) {
    const toast = await this.toast.create({
      header: carro.marca,
      message: carro.modelo+' '+carro.versao+' - '+carro.ano,
      position: 'bottom',
      color: 'primary',
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
  }
}
