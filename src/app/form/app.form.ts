import { Component, Injectable,OnInit,Output,EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { appService } from '../shared/app.service';
@Component({
	selector: 'app-form',
	templateUrl: 'app.form.html',
	styleUrls: ['app.form.css']
})
@Injectable()
export class AppComponentForm {
	city:string;
	date:Date;
	days:object;
	constructor (public service:appService){}
	Send(){
		console.log("valid")
		this.service.Send(this.city,this.date);
	}
}





