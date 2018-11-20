import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {
  imagen = '';
  nombre = '';
  num = '';
  face = '';
  insta = '';
  twitter = '';
  mail = '';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.imagen = this.navParams.get('imagen');
    this.nombre = this.navParams.get('nombre');
    this.num = this.navParams.get('num');
    this.face = this.navParams.get('face');
    this.insta = this.navParams.get('insta');
    this.twitter = this.navParams.get('twitter');
    this.mail =this.navParams.get ('mail');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
  }

}

