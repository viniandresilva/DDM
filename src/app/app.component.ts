import { Component } from '@angular/core';
import { Data } from '@angular/router';
import { Platform } from '@ionic/angular';
import { DatabaseService } from '../app/services/database/database.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Sorteio', url: 'sorteio', icon: 'shuffle' },
    { title: 'Paint', url: 'paint', icon: 'pencil' },
    { title: 'Lista', url: 'lista', icon: 'list' },
    { title: 'Lista Personalizada', url: 'listapersonalizada', icon: 'list' },
    { title: 'Bloco de Notas', url: 'bloconotas', icon: 'create' },
    { title: 'Cálculo IMC', url: 'imc', icon: 'calculator' },
    { title: 'Câmera', url: 'camera', icon: 'camera' },
  ];
  constructor(
    platform: Platform,
    dbService: DatabaseService
  )
  {
    platform.ready().then(() => {
      dbService.createDatabase();
    });
  }
}
