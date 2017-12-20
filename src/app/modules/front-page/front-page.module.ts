import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontPageRoutingModule } from './front-page-routing.module';
import { FrontPageComponent } from './front-page.component';
import { AcademicComponent } from './academic/academic.component';
import { BannerComponent } from './banner/banner.component';
import { CareerObjectiveComponent } from './career-objective/career-objective.component';
import { MyWorkComponent } from './my-work/my-work.component';
import { SkillsComponent } from './skills/skills.component';
import { MatGridListModule, MatProgressBarModule, MatSidenavModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    FrontPageRoutingModule,
    MatSidenavModule,
    MatGridListModule,
    FlexLayoutModule,
    MatProgressBarModule,
  ],
  declarations: [
    FrontPageComponent,
    AcademicComponent,
    BannerComponent,
    CareerObjectiveComponent,
    MyWorkComponent,
    SkillsComponent
  ],
  exports: [
    FrontPageComponent,
    AcademicComponent,
    BannerComponent,
    CareerObjectiveComponent,
    MyWorkComponent,
    SkillsComponent
  ]
})
export class FrontPageModule { }
