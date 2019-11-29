import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service'

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {

  constructor(public movieService:MovieService) { }

  searchTerm:string="";
  type:string="";
  movies;

  ngOnInit() {
  }

  retrieveMovie()
  {
  	this.movieService.searchData(this.searchTerm,this.type).subscribe(
  		resp=>{
			console.log(resp);
			this.movies = resp["Search"];
  		},
  		err=>{
			console.log(err);
  		});
  }
}
