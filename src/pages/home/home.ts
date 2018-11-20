import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { ContactPage } from '../contact/contact';
import { AddPage } from '../add/add';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // notas = ['Primer nota','Otra nota'];
  // nota = '';

  contacto = ContactPage;
  add = AddPage;

  constructor(public navCtrl: NavController, 
              public alertCtrl: AlertController) {

  }

  contactos =
  [
    {
      id:0,
      nombre: "Juan Gómez",
      num: "(33) 33 44 55 66",
      imagen: "../assets/a.png",
      insta: "Juan.Gom",
      face: "Juan Gómez",
      twitter:"JuGomez",
      mail: "juangomez09@hotmail.com"
    },

    {
      id: 1,
      nombre: "Frida Kahlo",
      num: "(33) 77 88 66 99",
      imagen: "../assets/f.png",
      insta: "Frida_Kahlo",
      face: "Frida Kahlo",
      twitter:"Frida.Kahlo.01",
      mail: "frida.kahlo.mex@gmail.com"
    },

    {
      id: 2,
      nombre: "Esteban Julio Ricardo Montoya de la rosa Ramírez",
      num: "(33) 44 55 66 66",
      imagen: "../assets/es.png",
      insta: "Es_Jul_Rich",
      face: "Julio Montoya",
      twitter:"e.j.r.m.d.l.r.r",
      mail: "Esteban.Montoya@outlook.com"
    }


  ]


  clickContact(c)
  {
      this.navCtrl.push(this.contacto, c);
  }
  clickAdd()
  {
      this.navCtrl.push(this.add, {contactos: this.contactos});
  }


  // clickAgregar()
  // {
  //   if(this.nota.length > 0)
  //   {
  //     this.notas.push(this.nota);
  //     this.nota = '';
  //   }
  //   else
  //   {
  //     const alert = this.alertCtrl.create({
  //         title: 'Oops!',
  //         subTitle: 'La nota esta vacía',
  //         buttons: ['Ok']
  //       });
  //       alert.present();
  //   }
  // }

}
