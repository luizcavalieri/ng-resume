import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { FrontPageComponent } from './modules/front-page/front-page.component';
import { GradesComponent } from './modules/academic/grades/grades.component';
import { ExperiencesComponent } from './modules/professional-experience/experiences/experiences.component';
import { AchievementsComponent } from './modules/career-achievement/achievements/achievements.component';


const indexRoute: Route = {
  path: '',
  redirectTo: '/home',
  pathMatch: 'full'
};


const fallBackRoute: Route = {
  path: '**',
  redirectTo: '/home',
  pathMatch: 'full'
};

const routes: Routes = [
  {
    path: 'home',
    component: FrontPageComponent
  },
  {
    path: 'achievements',
    component: AchievementsComponent
  },
  {
    path: 'academic',
    component: GradesComponent
  },
  {
    path: 'experience',
    component: ExperiencesComponent
  },
  indexRoute,
  fallBackRoute
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
