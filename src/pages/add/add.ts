import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the AddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add',
  templateUrl: 'add.html',
})
export class AddPage {
   
   name = '';
   phone = '';
   email = '';
   facebook = '';
   tweet = '';
   instag = '';
   contactos = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.contactos = this.navParams.get("contactos");
  }


   clickAgregar()
   {
     if(this.name.length > 0)
    {
       this.contactos.push({nombre: this.name, num: this.phone, insta: this.instag, face: this.facebook, twitter: this.tweet, mail: this.email, imagen: "../assets/av.png"});
       this.navCtrl.pop();
    }
     else
     {
       const alert = this.alertCtrl.create({
           title: 'Oops!',
          subTitle: 'El nombre esta vacío',
           buttons: ['Ok']
        });
         alert.present();
     }
   }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPage');
  }

}
