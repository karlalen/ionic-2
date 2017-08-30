import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { OperadorPage } from '../pages/operadores/operadores';
import { PruebaBDPage } from '../pages/pruebaBD/pruebaBD';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HttpModule } from '@angular/http';
//import{ Ng2MapModule} from 'ng2-map';
//import{ Geolocation } from '@ionic-native/geolocation';
import{ GoogleMaps} from '@ionic-native/google-maps';


import { AgmCoreModule } from 'angular2-google-maps/core';
//import { HttpProvider } from '../providers/http/http';

import { HttpProvider } from '../providers/http/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    OperadorPage,
    PruebaBDPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    //Ng2MapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyDbhxQVxKwqeoCOB-baZjPmE-KMJExySfQ'})
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDbhxQVxKwqeoCOB-baZjPmE-KMJExySfQ'
    }),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    HomePage,
    MyApp,
    ListPage,
    OperadorPage,
    PruebaBDPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpProvider

  ]
})
export class AppModule {}
