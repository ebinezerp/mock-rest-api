import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from '../model/course';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private httpClient: HttpClient) { }


  getCourse(): Observable<Course[]> {
    return this.httpClient.get<Course[]>('http://localhost:3000/course');
  }
}
