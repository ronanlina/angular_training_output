import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../../services/student/student.service';

@Component({
  selector: 'app-subject-form',
  templateUrl: './subject-form.component.html',
  styleUrls: ['./subject-form.component.css']
})
export class SubjectFormComponent implements OnInit {

  public professorList = [];
  constructor(
    public studentService: StudentService
  ) { }

  ngOnInit() {
    //this.professorList = this.studentService.getStudentList();
  }

}
