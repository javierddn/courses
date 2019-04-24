import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewCourseComponent } from './courses/new-course/new-course.component';
import { CourseComponent } from './courses/course/course.component';
import { CoursesComponent } from './courses/courses.component';

const routes: Routes = [
    {
        path: '',
        component: CoursesComponent
    },
    {
        path: 'new-course',
        component: NewCourseComponent
    },
    {
        path: ':id',
        component: CourseComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CoursesRoutingModule {}
