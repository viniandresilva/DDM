import { DecimalPipe } from '@angular/common';
import { ThrowStmt } from '@angular/compiler';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Route, Router, RouterModule } from '@angular/router';
import { MenuController, NavController, Platform, ToastController } from '@ionic/angular';

@Component({
  selector: 'imc',
  templateUrl: './imc.page.html',
  styleUrls: ['./imc.page.scss'],
})
export class IMCPage  {
  peso: number;
  altura: number;

  constructor(
    private platform: Platform,
    private toast: ToastController,
    private navCtrl: NavController) {}

  calcular() {
    this.navCtrl.navigateForward(['imc/resultado/',this.peso,this.altura]);
  }
}
