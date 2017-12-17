import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontPageComponent } from './front-page.component';

const routes: Routes = [
  {
    path: 'home', component: FrontPageComponent
    // children: []
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class FrontPageRoutingModule { }
