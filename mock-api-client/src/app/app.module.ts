import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { TrainerComponent } from './trainer/trainer.component';
import { AllCourseComponent } from './all-course/all-course.component';
import { CourseService } from './services/course.service';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    TrainerComponent,
    AllCourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    CourseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
