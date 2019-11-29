import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-weathers',
  templateUrl: './weathers.page.html',
  styleUrls: ['./weathers.page.scss'],
})
export class WeathersPage implements OnInit {

  constructor(
  	public weatherService:WeatherService,
  	private geolocation: Geolocation) { }

  city:string="";

  ngOnInit() 
  {
  	this.geolocation.getCurrentPosition().then((resp) => {
  		// resp.coords.latitude
  		console.log(resp.coords.latitude);
  		// resp.coords.longitude
  		console.log(resp.coords.longitude);

  		this.weatherService.retrieveWeatherLotLong(resp.coords.latitude,resp.coords.longitude);

  	}).catch((error) => {
  		console.log('Error getting location', error);
  	});
  }

  retrieveWeather()
  {
  	this.weatherService.retrieveWeather();
  }
}
