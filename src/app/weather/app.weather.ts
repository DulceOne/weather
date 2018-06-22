import { Component, OnInit ,OnChanges, SimpleChanges, DoCheck, Input} from '@angular/core';
import { appService } from '../shared/app.service';
@Component({
    selector: 'app-weather',
    templateUrl: 'app.weather.html',
    styleUrls: ['app.weather.css']
})
export class AppComponentWeather{
    public data:any;
    public old:any;
    public week:Array<string> = ["Вс","Пн","Вт","Ср","Чт","Пт","Сб"];
    public days: any = [];
    public day: any = [];
    constructor(private appService: appService) { }

    ngOnInit() {
        this.appService.weatherEmitter.subscribe(data => {
            this.data = data;
            this.days = [];
            this.days.push(this.parseDate(data.body.list[0].dt).day + "." + this.parseDate(data.body.list[0].dt).month);
            this.old = this.parseDate(data.body.list[0].dt).day + "." + this.parseDate(data.body.list[0].dt).month;
            for(var day of data.body.list){
                day.main.temp = Math.floor(day.main.temp-273);
                day.main.pressure =  Math.ceil(data.body.list[0].main.pressure*0.00750063755419211*100)
                if(this.old !=this.parseDate(day.dt).day + "." + this.parseDate(day.dt).month){
                    this.days.push(this.parseDate(day.dt).day + "." + this.parseDate(day.dt).month);
                    this.old = this.parseDate(day.dt).day + "." + this.parseDate(day.dt).month;
                }
            }

            console.log(this.days);
        });
    }
   

    parseDate(dt){
        var date =  new Date(dt*1000);
        var day = date.getUTCDate();
        var month = date.getMonth()+1;
        var hours = date.getUTCHours();
        var minutes = date.getUTCMinutes();

        return {day: this.zeroAdd(day), month: this.zeroAdd(month), hours: this.zeroAdd(hours), minutes: this.zeroAdd(minutes)};
    }
    zeroAdd(number) {
        if (number < 10) return ('0' + number);
        else return number;
    }
    getDay(event){
        var target = event.target.attributes.id.nodeValue;
        this.day = [];
        for(var day of this.data.body.list){
            console.log(typeof(day));
            if(target == (this.parseDate(day.dt).day + "." + this.parseDate(day.dt).month)){
                var date = this.parseDate(day.dt);
                var day_full = Object.assign(day, date);
                this.day.push(day_full);
            }
        }
        // console.log(day);
        // console.log(this.day);
        // console.log(target);
    }
}

