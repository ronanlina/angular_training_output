import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscriber } from 'rxjs/Subscriber';
import { StudentService } from './services/student/student.service';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent implements OnInit {
  
  public title: string = "Angular University";
  constructor(
   public studentService: StudentService)
   {}
  
  ngOnInit(){
    this.studentService.checkConnection()
  }

}
