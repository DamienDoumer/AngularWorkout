import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

import * as GeoFire from "geofire";
import { BehaviorSubject } from 'rxjs/BehaviorSubject'

@Injectable()
export class GeoService {

  dbRef: any;
  geoFire: any;

  hits = new BehaviorSubject([])

  constructor(private db: AngularFireDatabase) {

    /// Reference database location for GeoFire
    this.dbRef = this.db.list('/locations');
    this.geoFire = new GeoFire(this.dbRef.$ref);
   }

    /// Adds GeoFire data to database
    setLocation(key:string, coords: Array<number>) {

      //This sets the Locations automatically in the
      //database in the proper way for Geofire to query.
      this.geoFire.set(key, coords)
          .then(_ => console.log('location updated'))
          .catch(err => console.log(err))
    }

   /// Queries database for nearby locations, 
   /// Maps results to the hits BehaviorSubject
   getLocations(radius: number, coords: Array<number>) {
    this.geoFire.query({
      center: coords,
      radius: radius
    })
    
    //Get the results from firebase.
    .on('key_entered', (key, location, distance) => {
      let hit = {
        location: location,
        distance: distance
      }

      let currentHits = this.hits.value
      currentHits.push(hit)
      this.hits.next(currentHits)
    })
   }
}
