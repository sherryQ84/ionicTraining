import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  image;

  constructor(
  	public camera:Camera,
  	private socialSharing: SocialSharing) {}

  cameraPressed()
  {
  	console.log("camera press");
  	const options: CameraOptions = {
  		quality: 100,
  		destinationType: this.camera.DestinationType.DATA_URL,
  		encodingType: this.camera.EncodingType.JPEG,
  		mediaType: this.camera.MediaType.PICTURE
  	}

  	this.camera.getPicture(options).then((imageData) => {
  		// imageData is either a base64 encoded string or a file URI
  		// If it's base64 (DATA_URL):
  		let base64Image = 'data:image/jpeg;base64,' + imageData;
  		this.image = base64Image;
  	}, (err) => {
  		// Handle error
  	});
  }

  sharePressed()
  {
  	// Check if sharing via email is supported
  	//this.socialSharing.canShareViaEmail().then(() => {
  		// Sharing via email is possible
  	//}).catch(() => {
  		// Sharing via email is not possible
  	//});

  	// Share via email
  	//this.socialSharing.shareViaEmail('Body', 'Subject', ['recipient@example.org']).then(() => {
  		// Success!
  	//}).catch(() => {
  		// Error!
  	//});

  	this.socialSharing.shareViaFacebook('Message vis Facebook',this.image /* img */, null).then(()=>{

  	})
  	.catch((err)=>{
  		console.log(err);
  	})
  }
}
