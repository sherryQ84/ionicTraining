import { Component } from '@angular/core';
import { ToastController, AlertController, ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

	//declare global variable
	name : string = "Q";
	num = 0;
	message = "";
	actMessage = "";

  constructor(
  	public toastController: ToastController, 
  	public alertController: AlertController, 
  	public actionSheetController: ActionSheetController) {}

  clearField()
  {
  	this.num = 0;
  	this.message = "";
  	this.actMessage = "";
  }

  incrementPressed()
  {
  	console.log("increment pressed");
  	
  	//use this to call the global variable
  	this.message = "";
  	this.num++;
  }

  async decrementPressed()
  {
  	console.log("decrement pressed");

  	// error handling
  	if (this.num <= 0)
  	{
  		this.message = "Number cannot be less than 0!!";
  		console.log("Number cannot be less than 0!")
  		//alert("Number cannot be less than 0!!");
  		const toast = await this.toastController.create(
  		{
      		message: 'Number cannot be less than 0!',
      		duration: 1000
    	});
    	toast.present();
  	}
  	else
  	{
  		this.num--;
  	}
  }

  resetPressed()
  {
  	console.log("reset pressed");

  	this.clearField();
  }

  async alertPressed()
  {
  	const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Test',
      message: 'This is a sample alert message.',
      buttons: ['OK']
    });		

    await alert.present();
  }

  async actSheetPressed()
  {
  	const actionSheet = await this.actionSheetController.create({
      header: 'Albums',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          console.log('Delete clicked');
          this.actMessage = "Delete clicked";
        }
      }, {
        text: 'Share',
        icon: 'share',
        handler: () => {
          console.log('Share clicked');
          this.actMessage = "Share clicked";
        }
      }, {
        text: 'Play (open modal)',
        icon: 'arrow-dropright-circle',
        handler: () => {
          console.log('Play clicked');
          this.actMessage = "Play clicked";
        }
      }, {
        text: 'Favorite',
        icon: 'heart',
        handler: () => {
          console.log('Favorite clicked');
          this.actMessage = "Favorite clicked";
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
          this.actMessage = "Cancel clicked";
        }
      }]
    });
    await actionSheet.present();
  }

}
