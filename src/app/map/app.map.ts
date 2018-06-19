import { Component, OnInit ,OnChanges, SimpleChanges, DoCheck} from '@angular/core';
import { longStackSupport } from 'q';
// import { appService } from '../shared/app.service';
@Component({
  selector: 'app-map',
  templateUrl: 'app.map.html',
  styleUrls: ['../app.component.css']
})
export class AppComponentMap {
	lat: number = 51.678418;
	lng: number = 7.809007;

	getCoord(latitude,longitude,title){
		if(latitude && longitude){
			console.log(latitude)
			this.lat = latitude;
			this.lng= longitude;
		}
		
	//   console.log("lat : "+latitude+"; long : "+longitude+"; title : " + title);

	}

  }

