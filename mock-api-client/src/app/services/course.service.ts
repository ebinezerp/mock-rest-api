import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Course } from '../model/course';
import { Observable } from 'rxjs';
import { RoutingInfo } from '../util/routing-info';



@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private httpClient: HttpClient) {
    this.url = RoutingInfo.REST_ROOT_URL;
   }

  static readonly headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});

  url: string;

  private courses: Course[] = [];

  getCourses(): Observable<Course[]> {
    return this.httpClient.get<Course[]>(this.url + '/course');
  }

  getCourseById(id: string): Observable<Course> {
    return this.httpClient.get<Course>(this.url + '/course/' + id);
  }

  update(course: Course): Observable<Course> {
    return this.httpClient.put<Course>(this.url + '/course/' + course.id, course, {headers : CourseService.headers});
  }

  delete(courseId: string): Observable<any> {
    return this.httpClient.delete(this.url + '/course/' + courseId);
  }

  addNewCourse(course: Course): Observable<Course> {
    return this.httpClient.post<Course>(this.url + '/course/', course, {headers : CourseService.headers});
  }
}
