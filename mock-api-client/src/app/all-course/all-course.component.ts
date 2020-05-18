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
  constructor(private courseService: CourseService,
              private router: Router) {
    this.courseService.getCourses().subscribe(
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

  delete(course: Course) {
    this.courseService.delete(course.id).subscribe(
      (result) => {
        this.courses.splice(this.courses.indexOf(course), 1);
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
