import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss']
})
export class AlertPage implements OnInit {

  titulo: string;

  constructor(public alertController: AlertController) {}

  ngOnInit() {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: blah => {
            console.log('Cancelar');
          }
        },
        {
          text: 'Ok',
          handler: () => {
            console.log('Boton Ok');
          }
        }
      ]
    });

    await alert.present();
  }

  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      header: 'Nombre',
      inputs: [
        {
          name: 'txtMonbre',
          type: 'text',
          placeholder: 'Digitar Nombre...'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (data) => {
            console.log('Confirm Ok', data);
            this.titulo = data.txtMonbre;
          }
        }
      ]
    });

    await alert.present();
  }
}
