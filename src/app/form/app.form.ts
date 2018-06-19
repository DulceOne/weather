import { Component, Injectable,OnInit,Output,EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { appService } from '../shared/app.service';
@Component({
	selector: 'app-form',
	templateUrl: 'app.form.html',
	styleUrls: ['../app.component.css']
})
@Injectable()
export class AppComponentForm {
	city:string;
	date:Date;
	days:object;
	constructor (public service:appService){}
	Send(){
		this.service.Send(this.city,this.date);
	}
}





