import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './core/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: './main/home/home.module#HomeModule'
  },
  {
    path: 'about',
    loadChildren: './main/about/about.module#AboutModule'
  },
  {
    path: 'courses',
    loadChildren: './courses/courses.module#CoursesModule'
  },
  {
    path: 'teachers',
    loadChildren: './teachers/teachers.module#TeachersModule'
  },
  {
    path: 'not-found',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: 'not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
