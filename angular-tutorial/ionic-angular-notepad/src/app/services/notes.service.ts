import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Note } from '../note';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

	// cache of notes in Service
	public notes:Note[] = [];
	public loaded:boolean = false;

  constructor(public storage:Storage) { }

  // retrive data
  load():Promise<boolean>{
  	return new Promise((resolve)=>{

      // retrieve from storage
  		this.storage.get('notes').then((notes)=>{

        // update it inside service cache
  			if (notes != null)
  			{
  				this.notes = notes;
  			}	

  			this.loaded = true;

        // inform .ts it is loaded
  			resolve(true);
  		});
  	});
  }

  save():void{

    // saving the notes inside storage
    // s'notes' refer to the key ('filename')
    // this.notes -> what's going to be saved
  	this.storage.set('notes',this.notes)
  }

  getNote(id):Note{

    // look for an item in the Array -> foreach note in notes, find note.id = id
    // 'filter' work the same way
  	return this.notes.find(note => note.id == id)
  }

  create(title):void{

    // create a unique id from the previous largest ID (using Math.max)
    let id = Math.max(...this.notes.map(note=>parseInt(note.id)),0)+1

        // create the notes object, push it into cache
       this.notes.push({
         title:title,
         id:id.toString(),
         content:''
       })
        
        this.save();      
  }

  deleteNote(note):void{

    // look for the notes, get the index
    let index = this.notes.indexOf(note);

    // if index == -1 (not found)
    if(index > -1)
    {

      // remove an item (1) from the index given
      this.notes.splice(index,1);
      this.save();
    }
  }
}
