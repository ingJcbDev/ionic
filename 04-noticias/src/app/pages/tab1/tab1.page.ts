import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../../services/noticias.service';
import { Article } from '../interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  noticias: Article[] = [];

  constructor(private noticiasService: NoticiasService) { }

  ngOnInit() {
    this.cargarNoticias();
  }

  loadData(event) {
    // console.log('event---->');
    // console.log(event);
    this.cargarNoticias(event);
  }

  cargarNoticias(event?){
    this.noticiasService.getTopHeadLines()
      .subscribe(resp => {
        console.log('Noticias', resp);
        //this.noticias = resp.articles;

        if (resp.articles.length === 0){
          event.target.disabled = true;
          event.target.complete();
          return;
        }


        this.noticias.push(...resp.articles);
      });

    /* Para cuando no hay mas datos pare el infinite-scroll */
    if (event){
        event.target.complete();
      }
  }

}
