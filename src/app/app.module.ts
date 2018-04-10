import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule,Routes} from '@angular/router';


import { AppComponent } from './app.component';
import { AddStudentComponent } from './pages/add-student/add-student.component';
import { EditStudentComponent } from './pages/edit-student/edit-student.component';
import { StudentComponent } from './pages/student/student.component';

const appRoutes: Routes = [
	 { path: 'AddStudent', component: AddStudentComponent },
	 { path: 'EditStudent', component: EditStudentComponent },
	 { path: 'Student', component: StudentComponent },
	
]

@NgModule({
  declarations: [
    AppComponent,
    AddStudentComponent,
    EditStudentComponent,
    StudentComponent,
    
  ],
  imports: [
    BrowserModule,
	RouterModule.forRoot(appRoutes),
	FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
