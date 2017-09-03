import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import {AngularFireDatabase} from 'angularfire2/database';
export const firebaseConfig = environment.firebaseConfig;
import { AgmCoreModule } from '@agm/core';
import { NgSemanticModule } from "ng-semantic";

import { GeoService } from './geo.service';
import { AppComponent } from './app.component';
import { GoogleMapComponent } from './google-map/google-map.component';

@NgModule({
  declarations: [
    AppComponent,
    GoogleMapComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AgmCoreModule.forRoot({
      apiKey: environment.googleMapsKey,
    }),
    NgSemanticModule
  ],
  providers: [
    GeoService,
    AngularFireDatabase
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
