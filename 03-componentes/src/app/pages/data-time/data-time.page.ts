import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-time',
  templateUrl: './data-time.page.html',
  styleUrls: ['./data-time.page.scss'],
})
export class DataTimePage implements OnInit {

  fechaNaci: Date = new Date();

  constructor() { }

  ngOnInit() {
  }

  CambioFecha( event ) {
    console.log('ionChange', event );
    console.log('Date', new Date ( event.detail.value ) );
  }

}
