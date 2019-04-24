import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TeachersRoutingModule } from './teachers-routing.module';
import { NewTeacherComponent } from './teachers/new-teacher/new-teacher.component';
import { TeacherComponent } from './teachers/teacher/teacher.component';
import { TeachersComponent } from './teachers/teachers.component';

@NgModule({
    declarations: [TeachersComponent, TeacherComponent, NewTeacherComponent],
    imports: [CommonModule, TeachersRoutingModule]
})
export class TeachersModule {}
