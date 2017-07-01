import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdIconModule } from '@angular/material';

import { AppComponent } from './app.component';
import { NumberButton } from './components/numberButton/numberButton.component';

@NgModule({
  declarations: [
    AppComponent,
    NumberButton,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
