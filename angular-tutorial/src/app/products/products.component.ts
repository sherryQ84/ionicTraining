import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

	selectedItem

	product : Product = {
		name:"iPhone 12",
		price:5999,
		id:1
	}

	products : Product[] = [
		{
			name:"Samsung S9",
			price:4999,
			id:2
		},
		{
			name:"Huawei Mate 11",
			price:5799,
			id:3		
		},
		{	
			name:"Nokia 1110",
			price:999,
			id:4	
		}
	]

	intProducts

  constructor(public httpService:HttpService){}

  ngOnInit() {
  	this.httpService.getAllProducts().subscribe(
  		resp=>
  		{
  			console.log(resp)
  			this.intProducts = resp["data"];
  		},
  		err=>{console.log(err);})
  }

  productSelected(item)
  {
  	this.selectedItem = item;
  }

}
