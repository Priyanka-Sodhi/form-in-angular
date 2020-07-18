import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-rform',
  templateUrl: './rform.component.html',
  styleUrls: ['./rform.component.css']
})
export class RformComponent implements OnInit {

  constructor(private builder:FormBuilder) { }

  get name(){
    return this.registrationForm.get('name');
  }
  get password(){
    return this.registrationForm.get('password');
  }
  get dob(){
    return this.registrationForm.get('dob');
  }
  get gender(){
    return this.registrationForm.get('gender');
  }

  get email(){
    return this.registrationForm.get('email');
  }
  get phone(){
    return this.registrationForm.get('phone');
  }
  
  registrationForm  = this.builder.group({
    name:["",Validators.required],
    password:["",Validators.required],
    dob:["",Validators.required],
    gender:[null],
    email:["",Validators.required],
    phone:["",Validators.required]
     })

Gender:string[]=["Male","Female","Other"]


alert:boolean=false
handlebutton(){
  this.alert=true;
  this.registrationForm.reset({})
}
closeAlert(){
  this.alert=false;
}

  ngOnInit() {
  }

}