import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  tab = 'courses';

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  tabChange(tabname: string) {
    this.tab = tabname;
  }
}
