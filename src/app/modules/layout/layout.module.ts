import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout.component';
import { MatSidenavModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule
  ],
  declarations: [
    ContactMeComponent,
    FooterComponent,
    HeaderComponent,
    LayoutComponent
  ],
  exports: [
    ContactMeComponent,
    FooterComponent,
    HeaderComponent,
    LayoutComponent,
  ]
})
export class LayoutModule { }
