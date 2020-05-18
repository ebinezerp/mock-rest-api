import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { TrainerComponent } from './trainer/trainer.component';
import { AllCourseComponent } from './all-course/all-course.component';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { AddCourseComponent } from './add-course/add-course.component';



const routes: Routes = [
  { path: ' ', component: AppComponent },
  { path: 'course', component: CourseComponent,
    children: [
      { path: 'edit/:id', component: EditCourseComponent },
      { path: 'all', component: AllCourseComponent },
      { path: 'add', component: AddCourseComponent}
    ]
},
  { path: 'trainer', component: TrainerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
