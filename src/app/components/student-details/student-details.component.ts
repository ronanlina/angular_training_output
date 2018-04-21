import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit, OnChanges {

  @Input() object: any;
  @Output() fromChild  = new EventEmitter();

  constructor() { 
  }

  ngOnChanges(){
    this.checkValue( this.object.showModal );
  }

  ngOnInit() {

    $('#studentDetailsModal').on('hidden.bs.modal',()=>{
      this.emitValue(false);
    });
  }

  checkValue(bool: boolean){
    if( bool ){
      $('#studentDetailsModal').modal('show')
    }
  }

  emitValue(bool: boolean){
    this.fromChild.emit(bool); 

  }




}
