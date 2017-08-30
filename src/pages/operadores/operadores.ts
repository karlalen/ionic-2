import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-operadores',
  templateUrl: 'operadores.html'
})
export class OperadorPage {
  data:any=[];
  //-16.498838, -68.133972
  lat: number = -17.379999;
  lng: number = -64.819336;

  //loadMap:any;
  constructor(public navCtrl: NavController,
    public alertCtrl: AlertController,
    /*public geolocation: Geolocation,
    public googleMaps: GoogleMaps*/) {
  }

  //funcion para el alert
  showAlert() {
      let alert = this.alertCtrl.create({
        title: 'Banco Bisa',
        subTitle: 'Cajero Agencia Camacho ATM',
        buttons: ['OK']
      });
      alert.present();
  }

  datosOperador(data):void{
    //this.navCtrl.push(ListPage,{data});
    //console.log(data);
  }
}
