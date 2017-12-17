import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CareerAchievementRoutingModule } from './career-achievement-routing.module';
import { AchievementsComponent } from './achievements/achievements.component';

@NgModule({
  imports: [
    CommonModule,
    CareerAchievementRoutingModule
  ],
  declarations: [AchievementsComponent],
  exports: [AchievementsComponent]
})
export class CareerAchievementModule { }
