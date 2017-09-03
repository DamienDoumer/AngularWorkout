
import { Component, OnInit } from '@angular/core';
import { GeoService } from '../geo.service'

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css']
})
export class GoogleMapComponent implements OnInit {

  lat: number;
  lng: number;
  markers: any;

  constructor(private geo: GeoService) { }

  ngOnInit() 
  {
    this.getUserLocation();
    //When any point is added, marker will be updated, 
    //since we subscribed to hits 
    this.geo.hits.subscribe(hits => this.markers = hits);
    this.seedDatabase();
  } 

  private getUserLocation()
  {
    //Get the user's current location from the browser.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
       this.lat = position.coords.latitude;
       this.lng = position.coords.longitude;

       //Ask the geo service to look for locations 
       //within a 500Km radius.
       this.geo.getLocations(500, [this.lat, this.lng])

     });
    }
  }

  private seedDatabase()
  {
    let dummyPoints = [
      [4.138243, 9.239566]

    ]

    dummyPoints.forEach((val, idx) =>
    {
      let name = `dummy-location-${idx}`
      
      this.geo.setLocation(name, val)
    })
  }
}
