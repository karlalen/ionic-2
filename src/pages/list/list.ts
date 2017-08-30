import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';


@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  anyString:any=[]=[{"id":"1"}];
  //anyString:any;
//  nombre: string;
  items: Array<{title: string, note: string, icon: string}>;
  data2: any;
  //nombre:any;
  /*inicio:string;
  fin:string;
  transporte:string;
*/

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    //this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies

    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.data2=[];
    this.data2 = navParams.get("data");
    console.log(this.data2);


    /*this.data2.push({
      nombre: ,
      note: this.inicio,
      icon: this.fin
    });*/

    /*for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }*/
  }


  itemTapped(event, data) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ListPage, {
      data: data
    });
  }
}
