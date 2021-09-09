import { ThrowStmt } from '@angular/compiler';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuController, NavParams, Platform, ToastController } from '@ionic/angular';

@Component({
  selector: 'resultado-imc',
  templateUrl: './resultado-imc.page.html',
  styleUrls: ['./resultado-imc.page.scss'],
})
export class IMCPage  {
  imc: number;
  altura: number;
  img: string;
  constructor(
    private platform: Platform,
    private toast: ToastController,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe((params: any) => {
      this.altura = params.altura / 100;
      this.imc = parseFloat((params.peso / (this.altura * this.altura)).toFixed(2));

      if(this.imc < 16) {
        this.img = 'imc-1.png';
      } else if(this.imc > 16 && this.imc <= 18.5) {
        this.img = 'imc-2.png';
      } else if(this.imc > 18.5 && this.imc < 25) {
        this.img = 'imc-3.png';
      } else if(this.imc > 25 && this.imc < 30) {
        this.img = 'imc-4.png';
      } else if(this.imc > 30 && this.imc < 35) {
        this.img = 'imc-5.png';
      } else if(this.imc > 35 && this.imc < 40) {
        this.img = 'imc-6.png';
      } else if(this.imc > 40) {
        this.img = 'imc-7.png';
      }
    });
  }
}
