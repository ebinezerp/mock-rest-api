import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CourseService } from '../services/course.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

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
  }

  ngOnInit() {
  }

  submit() {
    this.courseService.addNewCourse(this.courseForm.value).subscribe(
      (course) => {
        this.router.navigate(['/course/']);
      },
      (error) => {
        console.log(error);
      }
    );
  }


}
