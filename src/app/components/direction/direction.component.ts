import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ViewChild } from '@angular/core';
import { } from '@types/googlemaps';

@Component({
  selector: 'app-direction',
  templateUrl: './direction.component.html',
  styleUrls: ['./direction.component.css']
})
export class DirectionComponent implements OnInit {

  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;

  origin: any;
  destination: any;
  dir: any;
  maps: any;
  start: any;
  searchPlace: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    this.origin = this.route.snapshot.params['origin'];
    this.destination = this.route.snapshot.params['destination'];
    this.dir = {
      origin: this.origin,
      destination: this.destination
    }
    this.maps = new google.maps.Map(this.gmapElement.nativeElement,
      {
        zoom: 9,
        center: { lat: 18.5204, lng: 73.8567 }
      });
    this.initMap();
    console.log(this.origin, this.destination);
  }

  initMap() {
    var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer;
    directionsDisplay.setMap(this.maps);

    this.start = {
      origin: this.origin,
      destination: this.destination,
      travelMode: 'DRIVING'
    };
    directionsService.route(this.start, function (result, status) {
      if (status) {
        directionsDisplay.setDirections(result);
      }
    });
  }

  /*placeAutocomplete(event :any) {
    console.log(event.target.value);
    let autocomplete = new google.maps.places.Autocomplete(event.target.value);
  }*/
  // var autocomplete = new google.maps.places.Autocomplete(this.searchPlace);

}

