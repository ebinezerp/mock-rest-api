import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { TrainerComponent } from './trainer/trainer.component';
import { AllCourseComponent } from './all-course/all-course.component';


const routes: Routes = [
  { path: ' ', component: AppComponent },
  { path: 'course', component: CourseComponent, children: [
    {
      path: '', component: AllCourseComponent
    }
  ]},
  { path: 'trainer', component: TrainerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
