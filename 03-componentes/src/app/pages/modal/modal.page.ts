import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInfoPage } from '../modal-info/modal-info.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  async abrirModal() {

    const modal = await this.modalCtrl.create({
      component: ModalInfoPage,
      componentProps: {
      nombre : 'Jonier',
      pais : 'Colombia'
      }
    });

    await modal.present();

    const { data } = await modal.onDidDismiss();

    console.log('Retorno ->', data );
    console.log(JSON.stringify( data )); // para que obj se vean en la consola de android studio
  }

}
