import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { NoticiasService } from '../../services/noticias.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page  implements OnInit{

  //@ViewChild(IonSegment, {static: false}) segment: IonSegment;

  categorias = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];

  constructor(private noticiasService: NoticiasService) {}

  ngOnInit(){
    console.log(this.categorias[0]);
    this.noticiasService.getTopHeadLinesCategoria(this.categorias[0])
    .subscribe( resp => {
      console.log('Categoria');
      console.log(resp);
    });
  }

}
