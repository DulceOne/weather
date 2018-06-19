import { Component } from '@angular/core';
import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppComponentWeather } from '../weather/app.weather';
import { AppComponentMap } from '../map/app.map';

@Injectable()
export class appService{
	days:object;
	latitude:string;
	longitude:string;
	title:string;
	data:object;
	constructor (private httpClient: HttpClient,public appWeather:AppComponentWeather,
		public appMap:AppComponentMap){}
	Send(city,date){
		this.httpClient.get(`http://localhost:9000/checkWeather/?city=${city}&date=${date}`)
		.subscribe(
			(data)=> {
				if(data){
					this.days = data;
					this.latitude = data.body.city.coord.lat;
					this.longitude = data.body.city.coord.lat;
					this.title = data.body.city.name;
					this.sendDays();
					this.sendCoord();
				}
			}
		)
	}
	sendDays(){
		this.appWeather.getDays(this.days);
	}
	sendCoord(){
		this.appMap.getCoord(this.latitude,this.longitude,this.title);
	}
}