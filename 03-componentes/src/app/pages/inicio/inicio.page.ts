import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente[] = [
    {
      ico: 'american-football',
      name: 'Action Sheet',
      redirectTo: '/action-sheet'
    },
    {
      ico: 'beer',
      name: 'Alert',
      redirectTo: '/alert'
    },
    {
      ico: 'beaker',
      name: 'Avatar',
      redirectTo: '/avatar'
    },
    {
      ico: 'radio-button-on',
      name: 'Botones y router',
      redirectTo: '/botones'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}

interface Componente {
  ico: string;
  name: string;
  redirectTo: string;
}