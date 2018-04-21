import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscriber } from 'rxjs/Subscriber';
import { StudentService } from '../../services/student/student.service';
import { StudentDetailsComponent } from '../student-details/student-details.component';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
  providers: [
    StudentDetailsComponent
  ]
})
export class StudentComponent implements OnInit {

  public myName: string = "Angular!";
  public inputValue: string = "My Value!";
  public inputId: string = "uniqueId";
  public color: string = "red";
  public student = {
    id: '',
    fname: '',
    mname: '',
    lname: ''
  };
  public value: string;
  public notification = {
    class: '',
    message: ''
  };

  //Pipe
  //Observable

  public dateObject = new Observable<string>((subs: Subscriber<string>)=>{
    setInterval(()=>{  subs.next( new Date().toString() ); }, 1000 );
  });
  
  public keyword: string;
  public sales = 15000;
  
  public studentList = [];

  public title: string = "Angular University";
  public links = [
  ];

  constructor( public studentService: StudentService ){
  }
  
  ngOnInit(){
    this.getList();
  }

  orderCol = 'fname';
  sort = false;
  switchOrder(val: string) {
    if (val) {
      this.orderCol = val;
      this.sort = (this.sort) ? false : true;
    }
  }

  //Component Interaction Method
  public selected_student: any;
  public fromParent ={
    data: {},
    showModal: false
  };

  viewStudent( object ){
    this.selected_student = object;

    //Object to pass
    this.fromParent= {
      data: object,
      showModal: true
    };
  }

  reciever(value){  
    this.fromParent.showModal = false;
  }

  continueAdd(){
    return ( this.student.fname && this.student.mname && this.student.lname );
  }

  isValid(input){
    if(input.length > 0){
      this.notification.class = 'text-success';
      this.notification.message = 'Valid First name!';
    }else{
      this.notification.class = 'text-danger';
      this.notification.message = 'Invalid First Name!';
    }
  } 


  addStudent(){
    //Assign new object; Remove binding of data
    let newData: any;
    newData = Object.assign({}, this.student );

    //Push Data to the Service
    this.studentService.addStudent( newData );
    this.getList();
    //Clear Student Object
    for( let stud in this.student ){
      this.student[stud] = '';
    }
  }

  updateStudent(){
    this.studentService.updateStudent(this.student)
    .subscribe(
      response=>{
        alert(response ['message']);
        this.studentList = this.studentService.studentList;
      }
    );
  }

  getList(){
    this.studentService.getStudentList().subscribe(
      response=>{
        this.studentList = response['data'];
      }
    );
  }

  removeStudent( object ){
    this.studentService.removeStudent(object).subscribe(
      response =>{
        alert( response['message']);
      }
    );
  }

  public edit: boolean = false;
  getStudent(data){
    this.student = data;

    //Set Update
    this.edit = true;
  }

  clear(){
    //Copy student Object
    let copy = Object.assign({}, this.student);
    //Clear the copy of student object
    for( let copyData in copy ){
      copy[copyData] = '';
    }
    this.student = copy;
  }
  newStudent(){
    this.edit = false;
  }

  
  valueChanged( update ){
    console.log( update );
  }

  consoleMe(fname, mname, lname){
    console.log( fname.value );
    // console.log( "My name is: " + fname + ' ' + mname + ' ' + lname );
  }
  clickOnce(){
    console.log( "click once!" );
  }
  doubleClicked(){
    console.log("Double Clicked!");
  }


}
