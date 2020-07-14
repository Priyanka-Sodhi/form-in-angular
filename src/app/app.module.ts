import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TformComponent } from './tform/tform.component';
import { RformComponent } from './rform/rform.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, TformComponent, RformComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
