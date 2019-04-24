import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoursesRoutingModule } from './courses-routing.module';
import { NewCourseComponent } from './courses/new-course/new-course.component';
import { CourseComponent } from './courses/course/course.component';
import { CoursesComponent } from './courses/courses.component';

@NgModule({
    declarations: [CoursesComponent, CourseComponent, NewCourseComponent],
    imports: [CommonModule, CoursesRoutingModule]
})
export class CoursesModule {}
