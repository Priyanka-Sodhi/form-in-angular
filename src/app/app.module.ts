import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TformComponent } from './tform/tform.component';
import { RformComponent } from './rform/rform.component';



@NgModule({
  imports:      [ BrowserModule, FormsModule,ReactiveFormsModule ],
  declarations: [ AppComponent, TformComponent, RformComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
