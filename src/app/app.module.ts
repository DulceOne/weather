import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponentWeather } from './weather/app.weather';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppComponentForm } from './form/app.form';
import { FormsModule }   from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    AppComponentForm,
    AppComponentWeather
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
