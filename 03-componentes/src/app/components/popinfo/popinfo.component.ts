import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popinfo',
  templateUrl: './popinfo.component.html',
  styleUrls: ['./popinfo.component.scss'],
})
export class PopinfoComponent implements OnInit {

<<<<<<< HEAD
  items = Array(5);
=======
  items = Array(10);
>>>>>>> 18673b19c6775a043abd587079f70ee893482f5d

  constructor(private popoverCtrl: PopoverController) { }

  ngOnInit() {}

<<<<<<< HEAD
  onClick(valor: number) {

    console.log('item', valor);

    this.popoverCtrl.dismiss({
      item: valor
    });

=======
  onClick( valor: number){
    console.log('item', valor);
    this.popoverCtrl.dismiss({
      item: valor
    });
>>>>>>> 18673b19c6775a043abd587079f70ee893482f5d
  }

}
