import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../model/course';
import { CourseService } from '../services/course.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {

  course: Course;
  courseForm: FormGroup;

  constructor(private courseService: CourseService,
              private activatedRoute: ActivatedRoute,
              private formBuilder: FormBuilder,
              private router: Router) {
              this.createCourseFormGroup();
  }


  createCourseFormGroup() {
    this.courseForm = this.formBuilder.group({
      id: '',
      description: '',
      fee: ''
    });
    const courseId = this.activatedRoute.snapshot.params.id;
    this.courseService.getCourseById(courseId).subscribe(
      (course) => {
        this.course = course;
        this.courseForm.setValue(this.course);
      },
      (error) => {
        console.log(error);
      }
    );


  }

  ngOnInit() {
  }

  submit() {
    console.log('alert');
    this.courseService.update(this.courseForm.value).subscribe(
      (course) => {
        this.router.navigate(['/course/']);
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
