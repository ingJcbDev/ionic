import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '', // nombre del tab
    redirectTo: 'contact' // ruta del tab
  },
  {
    path: '',
    component: TabsPage,
    children: [
    {
      path: 'account', // nombre del tab
      loadChildren: '../avatar/avatar.module#AvatarPageModule' // ruta del tab
    },
    {
      path: 'contact', // nombre del tab
      loadChildren: '../list/list.module#ListPageModule' // ruta del tab
    },
    {
      path: 'settings', // nombre del tab
      loadChildren: '../infinite-scroll/infinite-scroll.module#InfiniteScrollPageModule' // ruta del tab
    }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
