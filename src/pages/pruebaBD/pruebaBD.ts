import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';
//import { ListPage } from '../list/list';


@Component({
  selector: 'page-pruebaBD',
  templateUrl: 'PruebaBD.html'
})
export class PruebaBDPage {
  data : any=[];
  fecha: string;
  errorMessage:any;
  users:any[]=[];

  constructor(public navCtrl: NavController,
      public http: HttpProvider
  /*public http:HttpProvider*/) {

  }
/*
  ionViewDidLoad(){
    //llamando al metodo
   this.http.getUsers()
   .then(data => {
     this.users = data.results;
   })
   .catch(error =>{
     console.error(error);
   })
  }
*/

}
