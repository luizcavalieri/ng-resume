import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfessionalExperienceRoutingModule } from './professional-experience-routing.module';
import { ExperiencesComponent } from './experiences/experiences.component';

@NgModule({
  imports: [
    CommonModule,
    ProfessionalExperienceRoutingModule
  ],
  declarations: [
    ExperiencesComponent
  ],
  exports: [
    ExperiencesComponent
  ]
})
export class ProfessionalExperienceModule { }
