import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
	url = "https://reqres.in/api/products";
  constructor(public httpClient:HttpClient) { }

  getAllProducts()
  {
  	return this.httpClient.get(this.url);
  }
}
