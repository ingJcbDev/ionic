import { Component, OnInit } from '@angular/core';
// import { NoticiasService } from '../services/noticias.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { environment, SERVER_URL } from '../../environments/environment';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  env = environment;
  url = SERVER_URL;

  constructor() { }

  ngOnInit() {
    console.log(environment.production);
    console.log(environment.message);
    console.log(SERVER_URL);
  }

}
