import { ThrowStmt } from '@angular/compiler';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuController, Platform, ToastController } from '@ionic/angular';

@Component({
  selector: 'lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage  {

  lista = [
    {
      nome: 'Cupcake',
      versao: '1.5'
    },
    {
      nome: 'Donut',
      versao: '1.6'
    },
    {
      nome: 'Ecalir',
      versao: '2.0 - 2.01 - 2.1'
    },
    {
      nome: 'Froyo',
      versao: '2.2'
    },
    {
      nome: 'Gingerbread',
      versao: '2.3 - 2.3.3'
    },
    {
      nome: 'Honeycomb',
      versao: '3.0 - 3.1 - 3.2'
    },
    {
      nome: 'Ice Cream Sanwich',
      versao: '4.0 - 4.0.3'
    },
    {
      nome: 'Jelly Bean',
      versao: '4.1 - 4.2 - 4.3'
    },
    {
      nome: 'Lollipop',
      versao: '4.4'
    },
    {
      nome: 'Lollipop',
      versao: '5.0 - 5.1'
    },
    {
      nome: 'Marshmallow',
      versao: '6.0'
    },
    {
      nome: 'Nougat',
      versao: '7.0 - 7.1'
    },
    {
      nome: 'Oreo',
      versao: '8.0 - 8.1'
    },
    {
      nome: 'Pie',
      versao: '9'
    },
    {
      nome: 'Android 10',
      versao: '10'
    },
    {
      nome: 'Android 11',
      versao: '11'
    },
    {
      nome: 'Android 12',
      versao: '12'
    },
  ];

  constructor(
    private platform: Platform,
    private toast: ToastController
  ) {}

  async showInfo(nome: string, versao: string) {
    let toast = await this.toast.create({
      header: 'Android '+nome,
      message: 'Versões: '+versao,
      position: 'bottom',
      color: 'success',
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
