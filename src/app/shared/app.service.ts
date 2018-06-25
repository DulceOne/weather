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
	@Output() errorEmitter: EventEmitter<any> = new EventEmitter();
	constructor (private httpClient: HttpClient){}
	Send(city,date){
		this.httpClient.get(`http://localhost:9000/checkWeather/?city=${city}&date=${date}`)
		.subscribe(
			(data)=> {
				this.days = data;
				if(this.days.body.cod!=404){
					console.log(this.days.body.code);
					this.days.date = date;
					this.sendDaysAndCoord();
				}
				else{
					this.sendError();
				}
			}
		)
	}
	sendDaysAndCoord(){
		this.weatherEmitter.emit(this.days);
		this.mapEmitter.emit(this.days);
	}
	sendError(){
		this.errorEmitter.emit(this.days)
	}
}