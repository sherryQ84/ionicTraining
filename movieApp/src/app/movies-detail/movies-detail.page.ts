import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movies-detail',
  templateUrl: './movies-detail.page.html',
  styleUrls: ['./movies-detail.page.scss'],
})
export class MoviesDetailPage implements OnInit {

  constructor(
  	public movieService:MovieService,
  	public activatedRoute:ActivatedRoute) { }

  movie;
  ngOnInit() 
  {
  	// getting the id pass in the parameter
  	let imdbId = this.activatedRoute.snapshot.paramMap.get('id');
    
  	// restrive the notes from noteservice
  	this.movieService.getMovieById(imdbId).subscribe(resp=>
  	{
  		console.log(resp);
  		this.movie=resp;
  	},err=>
  	{
  		console.log(err);
  	}
  	)
  }
}
