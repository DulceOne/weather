import { Component, OnInit ,OnChanges, SimpleChanges, DoCheck} from '@angular/core';
// import { appService } from '../shared/app.service';
@Component({
    selector: 'app-weather',
    templateUrl: 'app.weather.html',
    styleUrls: ['../app.component.css']
})
export class AppComponentWeather{
    public days:object;

    getDays(days){
        console.log(days);
    }
}

