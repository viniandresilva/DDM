import { ThrowStmt } from '@angular/compiler';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, MenuController, Platform, ToastController } from '@ionic/angular';
import { Anotacao } from 'src/app/models/anotacao';
import { AnotacoesService } from 'src/app/services/anotacoes/anotacoes.service';
import { ModalController } from '@ionic/angular';
import { ModalAnotacaoPage } from './modal-anotacao/modal-anotacao.page';

@Component({
  selector: 'bloco-notas',
  templateUrl: './bloconotas.page.html',
  styleUrls: ['./bloconotas.page.scss'],
})
export class BlocoNotasPage implements OnInit {
  anotacoes: Array<Anotacao>;

  constructor(
    private platform: Platform,
    private toastCtrl: ToastController,
    private anotacoesProvider: AnotacoesService,
    private modalCtrl: ModalController,
    private loadingCtrl: LoadingController
  ) {}

  ngOnInit(): void {
    this.getAllNotes();
  }

  async getAllNotes() {
    const loading = await this.loadingCtrl.create({
      message: 'Carregando..',
      animated: true,
      translucent: true
    });
    loading.present();
    this.anotacoesProvider.getAll()
      .then((result: Anotacao[]) => {
        this.anotacoes = result;
        loading.dismiss();
      }).catch(async (e) => {
        const toast = await this.toastCtrl.create({
          message: 'Não foi possível buscar as anotações!',
          duration: 3000,
          color: 'danger'
        });
        toast.present();
      });
  }

  async createNote(anotacao?: Anotacao) {
    const modal = await this.modalCtrl.create({
      component: ModalAnotacaoPage,
      componentProps: {
        anotacao: anotacao
      }
    });

    modal.onDidDismiss().then((response) => {
      if(response.role) {
        this.getAllNotes();
      }
    });

    return await modal.present();
  }

}
