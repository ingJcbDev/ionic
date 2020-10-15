import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespuestaToHeadLines } from '../pages/interfaces/interfaces';
import { environment } from 'src/environments/environment';

const apiKey = environment.apiKey;
const apiUrl = environment.apiUrl;

const headers = new HttpHeaders({
  'X-Api-key': apiKey
});

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http: HttpClient ) { }

  private ejecutarQuery<T>(query: string){
    query = apiUrl + query;
    return this.http.get<T>(query, { headers });
  }

  getTopHeadLines(){
    return this.ejecutarQuery<RespuestaToHeadLines>(`/top-headlines?country=co`);
  }
  getTopHeadLinesCategoria( categoria: string ){
    return this.ejecutarQuery<RespuestaToHeadLines>(`/top-headlines?country=co&category=${categoria}`);
  }

}
