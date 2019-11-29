import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(public httpClient:HttpClient) { }

  public weathers;
  public city;
  public found = false

  apiKey = "9fd7a449d055dba26a982a3220f32aa2";
  baseURL = "https://api.openweathermap.org/data/2.5/forecast/daily";

  // search for data from baseURL
  searchData(data:string)
  {
  	return this.httpClient.get(`${this.baseURL}?q=${data}&appid=${this.apiKey}`);
  }

  retrieveWeather()
  {
  	this.searchData(this.city).subscribe(
  		resp=>{
  			console.log(resp);
  			this.weathers = resp["list"];
  			this.found = true
  		},err=>{
  			console.log(err);
  			this.found = false
  		});
  }

  retrieveWeatherByDt(dt)
  {
  	return this.weathers.find(weathers=> weathers.dt == dt);
  }

  retrieveWeatherLotLong(lat, lon)
  {
  	this.httpClient.get(`${this.baseURL}?lat=${lat}&lon=${lon}&appid=${this.apiKey}`).subscribe(
  		resp=>{
  			this.weathers = resp["list"];
  			this.city = resp["city"]["name"];
  			this.found = true;
  		},err=>{
  			console.log(err);
  			this.found = false

  		})
  }
}
