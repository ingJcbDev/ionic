import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http: HttpClient) { }

  ejecutarQuery<T>(){
    var url = `http://newsapi.org/v2/everything?q=bitcoin&from=2020-09-19&sortBy=publishedAt&apiKey=d268e175440744edbba4a0b3bffecfbe`;
    return this.http.get<T>(url);
  }
 
}
