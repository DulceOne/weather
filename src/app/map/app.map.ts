import { Component, OnInit ,OnChanges, SimpleChanges, DoCheck} from '@angular/core';
import { longStackSupport } from 'q';
import { appService } from '../shared/app.service';
@Component({
  selector: 'app-map',
  templateUrl: 'app.map.html',
  styleUrls: ['app.map.css']
})
export class AppComponentMap{
	public title:any;
	public lat:number = 47;
	public lng:number = 35;
	constructor(private appService: appService) { }

	ngOnInit() {
		 this.appService.mapEmitter.subscribe(day => {
			// data.body.city.coord.lat;
			// this.longitude = data.body.city.coord.lon;
			// this.title = data.body.city.name;
			 this.title = day.body.city.name;
			 this.lat = day.body.city.coord.lat;
			 this.lng = day.body.city.coord.lon;
		 });
	 }
 

  }

