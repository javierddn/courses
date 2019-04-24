import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styles: []
})
export class CourseComponent implements OnInit {
  public courseId = '';
  constructor(activateRoute: ActivatedRoute) {
    this.courseId = activateRoute.snapshot.params['id'];
  }
  ngOnInit() {}
}
