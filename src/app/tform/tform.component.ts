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

  gen:string[]=["Male","Female","Other"]

  ngOnInit() {
    this.studentModel=new Student("","","","","")
  }
}