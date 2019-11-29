import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.page.html',
  styleUrls: ['./weather-details.page.scss'],
})
export class WeatherDetailsPage implements OnInit {

  constructor(public weatherService:WeatherService, public activatedRoute:ActivatedRoute) { }

  weathers;
  ngOnInit() 
  {
  	let datetime = this.activatedRoute.snapshot.paramMap.get('dt');

    this.weathers=this.weatherService.retrieveWeatherByDt(datetime);
   
  }

}
