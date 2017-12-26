import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FrontPageModule } from './modules/front-page/front-page.module';
import { AcademicModule } from './modules/academic/academic.module';
import { LayoutModule } from './modules/layout/layout.module';
import { ProfessionalExperienceModule } from './modules/professional-experience/professional-experience.module';
import { CareerAchievementModule } from './modules/career-achievement/career-achievement.module';
import {
  MatGridListModule,
  MatIconModule,
  MatProgressBarModule,
  MatSidenavModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FrontPageModule,
    AcademicModule,
    LayoutModule,
    ProfessionalExperienceModule,
    CareerAchievementModule,
    FlexLayoutModule,
    MatProgressBarModule,
    MatSidenavModule,
    MatGridListModule,
    MatIconModule,
    HttpClientModule,
  ],
  exports: [
    MatSidenavModule,
    MatGridListModule,
    FlexLayoutModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
