import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcademicRoutingModule } from './academic-routing.module';
import { GradesComponent } from './grades/grades.component';

@NgModule({
  imports: [
    CommonModule,
    AcademicRoutingModule
  ],
  declarations: [
    GradesComponent
  ],
  exports: [
    GradesComponent,
  ]
})
export class AcademicModule { }
