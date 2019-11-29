import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }	from '@angular/router';
import { NotesService }	from '../services/notes.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

	item = {
		id:'',
		title:'',
		content:''
	}

  constructor(
  	public activatedRoute:ActivatedRoute,
  	public noteService:NotesService) { }

  ngOnInit() 
  {
  	// getting the id pass in the parameter
  	let noteId = this.activatedRoute.snapshot.paramMap.get('id');

  	// restrive the notes from noteservice
  	this.item = this.noteService.getNote(noteId);
  }

  saveInfo()
  {
  	this.noteService.save();
  }

}
