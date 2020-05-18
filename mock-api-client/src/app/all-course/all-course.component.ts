import { Component, OnInit } from '@angular/core';
import { CourseService } from '../services/course.service';
import { Course } from '../model/course';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-all-course',
  templateUrl: './all-course.component.html',
  styleUrls: ['./all-course.component.css']
})
export class AllCourseComponent implements OnInit {

  courses: Course[];
  constructor(private courseService: CourseService) {
    this.courseService.getCourse().subscribe(
      (courses) => {
        this.courses = courses;
      },
      (error) => {
        console.log();
      }
    );
  }

  ngOnInit() {
  }

}
