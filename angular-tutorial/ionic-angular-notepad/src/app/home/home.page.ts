import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NotesService } from '../services/notes.service';

@Component({
	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

	//items = ["Ideas for later","Grocery Items","that thing","20% off at JB"]

	constructor(
		public alertController: AlertController, 
		public notesService:NotesService) {}

	ngOnInit() {
		this.notesService.load();
	}

	async addNote()
	{
		const alert = await this.alertController.create({
			header: 'This is an alert prompt!',
			inputs: [
			{
				name: 'title',
				type: 'text',
				placeholder: 'Enter item name.'
			}],
			buttons: [
			{
				text: 'Cancel',
				role: 'cancel',
				cssClass: 'secondary',
				handler: () => {
					console.log('Confirm Cancel');
				}
			}, 
			{
				text: 'Ok',
				handler: (data) => {
					//console.log('Confirm Ok');

					// push input text into items array above
					//this.items.push(data.name);
					this.notesService.create(data.title);
				}
			}]
		});	

		await alert.present();	
	}

	deletePressed(item)
	{
		this.notesService.deleteNote(item);
	}
}
