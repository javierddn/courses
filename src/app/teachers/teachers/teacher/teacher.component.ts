import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styles: []
})
export class TeacherComponent implements OnInit {
  public teacherId = '';
  constructor(activateRoute: ActivatedRoute) {
    this.teacherId = activateRoute.snapshot.params['id'];
  }
  ngOnInit() {}
}
