import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Import
import { AppComponent } from './app.component';
//Pipes
import { SearchPipe } from './search-pipe.pipe';
import { OrderModule } from 'ngx-order-pipe';

//Services
import { StudentService } from './services/student/student.service';
import { SubjectFormComponent } from './components/subjects/subject-form/subject-form.component';
import { HomeComponent } from './components/home/home.component';
import { StudentComponent } from './components/student/student.component';
import { AppRoutingModule } from './app-routing.module';
import { StudentDetailsComponent } from './components/student-details/student-details.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    SearchPipe,
    SubjectFormComponent,
    HomeComponent,
    StudentComponent,
    StudentDetailsComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    OrderModule,
    HttpClientModule
  ],
  providers: [
    StudentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
