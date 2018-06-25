import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { AppComponentForm } from './form/app.form';
import { AppComponentWeather } from './weather/app.weather';
import { HttpClientModule } from '@angular/common/http';
import { appService } from './shared/app.service';
import { AgmCoreModule } from '@agm/core';
import { AppComponentMap } from './map/app.map';

@NgModule({
	declarations: [
		AppComponent,
		AppComponentForm,
		AppComponentWeather,
		AppComponentMap
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		FormsModule,
		AgmCoreModule.forRoot({
			apiKey: 'AIzaSyB_14VszYiw4ZNPk06EH91C9ZM-t9CQnaU'
		})
	],
	providers: [AppComponentWeather,appService,AppComponentForm,AppComponentMap],
	bootstrap: [AppComponent]
})
export class AppModule { }
