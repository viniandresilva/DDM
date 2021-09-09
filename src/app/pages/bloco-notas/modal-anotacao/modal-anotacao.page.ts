import { Component, Input, OnInit } from '@angular/core';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { Anotacao } from 'src/app/models/anotacao';
import { AnotacoesService } from 'src/app/services/anotacoes/anotacoes.service';

@Component({
  selector: 'app-modal-anotacao',
  templateUrl: './modal-anotacao.page.html',
  styleUrls: ['./modal-anotacao.page.scss'],
})
export class ModalAnotacaoPage implements OnInit {
  @Input() anotacao: Anotacao;
  titulo: string;
  descricao: string;

  constructor(
    private modalCtrl: ModalController,
    private toastCtrl: ToastController,
    private anotacaoService: AnotacoesService,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
    if(this.anotacao) {
      this.titulo = this.anotacao.titulo;
      this.descricao = this.anotacao.descricao;
    }

    console.log('anotacao', this.anotacao);
  }

  async save() {
    if(!this.titulo || !this.descricao) {
      const toast = await this.toastCtrl.create({
        message: 'Informe todos os campos',
        duration: 3000,
        color: 'danger'
      });

      toast.present();
    } else {
      if(this.anotacao) {
        this.anotacao.titulo = this.titulo;
        this.anotacao.descricao = this.descricao;
        this.anotacaoService.update(this.anotacao)
          .then(async (data: any) => {
            const toast = await this.toastCtrl.create({
              message: 'Anotação atualizada com sucesso!',
              duration: 3000,
              color: 'success'
            });
            toast.present();
            this.close('update');
          })
          .catch(async (e) => {
            const toast = await this.toastCtrl.create({
              message: 'Não foi possível atualizar a anotação!',
              duration: 3000,
              color: 'danger'
            });
            toast.present();
            this.close();
          });
      } else {
        this.anotacao = {
          id: null,
          titulo: this.titulo,
          descricao: this.descricao
        };

        this.anotacaoService.insert(this.anotacao)
        .then(async (data: any) => {
          const toast = await this.toastCtrl.create({
            message: 'Anotação atualizada com sucesso!',
            duration: 3000,
            color: 'success'
          });
          toast.present();
          this.close('save');
        })
        .catch(async (e) => {
          const toast = await this.toastCtrl.create({
            message: 'Não foi possível atualizar a anotação!',
            duration: 3000,
            color: 'danger'
          });
          toast.present();
          this.close();
        });
      }
    }
  }

  async deleteNote() {
    const alert = await this.alertCtrl.create({
      header: 'Confirmar Exclusão',
      message: 'Deseja excluir essa anotação?',
      buttons: [
        {
          text: 'Não'
        },
        {
          text: 'Sim',
          handler: () => {
            this.anotacaoService.delete(this.anotacao.id)
            .then(async (data: any) => {
              const toast = await this.toastCtrl.create({
                message: 'Anotação excluída com sucesso!',
                duration: 3000,
                color: 'success'
              });
              toast.present();
              this.close('delete');
            })
            .catch(async (e) => {
              const toast = await this.toastCtrl.create({
                message: 'Não foi possível excluir a anotação!',
                duration: 3000,
                color: 'danger'
              });
              toast.present();
              this.close();
            });
          }
        }
      ],
      translucent: true
    });
    alert.present();
  }

  async close(action?: string) {
    await this.modalCtrl.dismiss({},action);
  }

}
