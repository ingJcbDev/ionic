import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopinfoComponent } from '../../components/popinfo/popinfo.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  constructor(private popoverCtrl: PopoverController) { }

  ngOnInit() {
  }

  async mostrarPop( evento ) {

    const popover = await this.popoverCtrl.create({
      component: PopinfoComponent,
      event: evento,
      mode: 'ios',
<<<<<<< HEAD
      backdropDismiss: false
=======
      backdropDismiss: false // no se cierra sin hacer interacion en el popover
>>>>>>> 18673b19c6775a043abd587079f70ee893482f5d
    });

    await popover.present();

<<<<<<< HEAD
    // const {data} = await popover.onDidDismiss(); // despues de cerrar el popover
    const {data} = await popover.onWillDismiss(); // antes de cerrar el popover

    console.log('padre:', data);
=======
    // const { data } = await popover.onDidDismiss(); // cuando cierre 
    const { data } = await popover.onWillDismiss(); // al dar click

    console.log('object', data);
>>>>>>> 18673b19c6775a043abd587079f70ee893482f5d

  }

}
