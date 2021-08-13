import { Component } from '@angular/core';
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
  ];
  constructor() {}
}
