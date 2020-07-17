import { Component, OnInit } from '@angular/core';
import {Student} from './student';


@Component({
  selector: 'app-tform',
  templateUrl: './tform.component.html',
  styleUrls: ['./tform.component.css']
})
export class TformComponent implements OnInit {

  studentModel:any;

  constructor() { }

  Gender:string[]=["Male","Female","Other"]

  ngOnInit() {
    this.studentModel=new Student("","","","","")
  }

alert:boolean=false
handlebutton(){
  this.alert=true;
  console.log(this.studentModel)
}
closeAlert(){
  this.alert=false;
}

}