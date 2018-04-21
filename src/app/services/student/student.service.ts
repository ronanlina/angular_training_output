import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Subscription } from 'rxjs/Subscription';

@Injectable()
export class StudentService {

  public studentList : any= []; //Storage of Students Data
  public subs: Subscription;
  public api: string = "http://angular.tokyosystemsolutions.com/api/";
  constructor(
    public http: HttpClient
  ) { }

  checkConnection(){
    this.subs = this.http.get(this.api)
    .subscribe(response =>{
      console.log(response);
    });
  }

  getStudentList(){
    return this.http.get(this.api+ "student/all");
  }

  addStudent( object ){
    this.subs = this.http.post(this.api + "student/add", this.convertToString(object), {headers: {'Content-Type': 'application/x-www-form-urlencoded'}})
    .subscribe(response =>{
      console.log(response);
    });
  }

  updateStudent(object){
    return  this.http.post(this.api + "student/update", this.convertToString(object), {headers: {'Content-Type': 'application/x-www-form-urlencoded'}});
  }
  
  convertToString(object){
    let url: string = "";
    for(let ob in object){
      url += ob + "=" + object[ob] + "&";
    }
    return url;
  }

  removeStudent(object){
    return  this.http.post(this.api + "student/delete", 
    this.convertToString(object), 
    {
      headers: {'Content-Type': 'application/x-www-form-urlencoded'
    }
  });
  }

}
