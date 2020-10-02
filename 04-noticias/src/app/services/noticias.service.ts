import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespuestaToHeadLines } from '../pages/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http: HttpClient ) { }

  getTopHeadLines(){
    return this.http.get<RespuestaToHeadLines>(`http://newsapi.org/v2/top-headlines?country=co&apiKey=d268e175440744edbba4a0b3bffecfbe`);
  }

}
