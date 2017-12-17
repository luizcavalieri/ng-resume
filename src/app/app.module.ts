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
import { MatSidenavModule } from '@angular/material';


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
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
