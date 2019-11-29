import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(public httpClient:HttpClient) { }

  apiKey = "87d10179";
  baseURL = "http://www.omdbapi.com/";
  searchData(title:string,type:string)
  {
  	// hardcode search url 
  	//return this.httpClient.get('http://www.omdbapi.com/?s=legend&type=series&apiKey=87d10179')

  	// dynamic search url
  	return this.httpClient.get(`${this.baseURL}?s=${title}&type=${type}&apiKey=${this.apiKey}`);
  }

  getMovieById(omdbId:string)
  {
  	// dynamic search url
  	return this.httpClient.get(`${this.baseURL}?i=${omdbId}&plot=full&apiKey=${this.apiKey}`);
  }
}
