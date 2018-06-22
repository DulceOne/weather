import { Component,Output,EventEmitter} from '@angular/core';
import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppComponentWeather } from '../weather/app.weather';
import { AppComponentMap } from '../map/app.map';

@Injectable()
export class appService{
	data:any;
	days:any;
	latitude:any;
	longitude:any;
	title:any;
	body:object;
	@Output() weatherEmitter: EventEmitter<any> = new EventEmitter();
	@Output() mapEmitter: EventEmitter<any> = new EventEmitter();
	constructor (private httpClient: HttpClient){}
	Send(city,date){
		this.httpClient.get(`http://localhost:9000/checkWeather/?city=${city}&date=${date}`)
		.subscribe(
			(data)=> {
				if(data){
					this.days = data;
					// this.latitude = data.body.city.coord.lat;
					// this.longitude = data.body.city.coord.lon;
					// this.title = data.body.city.name;
					this.sendDays();
					this.sendCoord();
				}
			}
		)
	}
	sendDays(){
		this.weatherEmitter.emit(this.days);
	}
	sendCoord(){
		// this.mapEmitter.emit({latitude:this.latitude,longitude:this.longitude,title:this.title});
		this.mapEmitter.emit(this.days);
	}
}