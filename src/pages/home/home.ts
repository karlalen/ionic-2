import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';
//import { ListPage } from '../list/list';


import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  data : any=[];
  fecha: string;
  errorMessage:any;
  users:any[]=[];

  constructor(public navCtrl: NavController,
      public http: HttpProvider
  /*public http:HttpProvider*/) {

  }

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

  /*prueba(data):void{
    this.navCtrl.push(ListPage,{data});
  }*/
  /*listaC(data):void  {
    console.log(data);
      let aux =
      {
			  fecha_c:data.fecha
      }
      this.http.postHistorial(aux).subscribe(
                        listado => this.buena_funcion(listado),
                        error =>  this.errorMessage = <any>error);
   }
   buena_funcion (data: any):void {

     this.fecha=data.fecha;
     //localStorage.setItem("nombre",this.fecha);

   }*/


}
