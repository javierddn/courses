import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewTeacherComponent } from './teachers/new-teacher/new-teacher.component';
import { TeacherComponent } from './teachers/teacher/teacher.component';
import { TeachersComponent } from './teachers/teachers.component';

const routes: Routes = [
    {
        path: '',
        component: TeachersComponent
    },
    {
        path: 'new-teacher',
        component: NewTeacherComponent
    },
    {
        path: ':id',
        component: TeacherComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TeachersRoutingModule {}
