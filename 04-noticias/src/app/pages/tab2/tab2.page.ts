import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment, IonInfiniteScroll } from '@ionic/angular';
import { NoticiasService } from '../../services/noticias.service';
import { Article } from '../interfaces/interfaces';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page  implements OnInit{

  //@ViewChild(IonSegment, {static: false}) segment: IonSegment;

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  categorias = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];
  noticias: Article[] = [];
  categoActual = 'business';

  constructor(private noticiasService: NoticiasService) {}

  ngOnInit(){
    // console.log(this.categoActual);
    this.cargarNoticias(this.categorias[0]);
  }

  cambioCategoria( event ){
    this.noticias = [];

    this.categoActual = event.detail.value;
    this.cargarNoticias(event.detail.value);
  }

  cargarNoticias(categoria: string, event?){
    this.noticiasService.getTopHeadLinesCategoria(categoria)
    .subscribe( resp => {

      // console.log(resp.articles.length);

      console.log(resp);

      this.noticias.push(...resp.articles);
      if ( event ){
        event.target.complete();
      }
      // if (resp.articles.length === 0){
      //   event.target.disabled = true;
      //   event.target.complete();
      //   return;
      // }
    });

  }

  loadData(event) {
    setTimeout(() => {
      this.cargarNoticias(this.categoActual, event );
    }, 500);
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }

}
