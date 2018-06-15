import { Component } from '@angular/core';
const days = ["Первый","Второй","Третий","Четверытый","Пятый"];
@Component({
  selector: 'app-weather',
  templateUrl: 'app.weather.html',
  styleUrls: ['../app.component.css']
})
export class AppComponentWeather {
  days = days;
}
