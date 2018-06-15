import { Component, Injectable } from '@angular/core';
import {appService} from '../shared/app.cervice';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-form',
  templateUrl: 'app.form.html',
  styleUrls: ['../app.component.css']
})
@Injectable()
export class AppComponentForm {
  constructor (private httpClient: HttpClient){}
  city:string;
  date:Date;
  send(){
      // this.httpClient.post(`http://server-weather:9000/saveWeather`,{})
      this.httpClient.get(`http://localhost:9000/checkWeather/?city=${this.city}&date=${this.date}`)
      .subscribe(
        (data)=> {
          console.log(data);
        }
      )
  }
}
