import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Sorteio', url: 'sorteio', icon: 'phone-portrait' },
    { title: 'Paint', url: 'paint', icon: 'pencil' },
  ];
  constructor() {}
}
