import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { } from '@types/googlemaps';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;
  ngOnInit() {
  let uluru = {lat: 18.5793, lng: 73.8143};
    let map = new google.maps.Map(
      this.gmapElement.nativeElement, {zoom: 4, center: uluru});
    let marker = new google.maps.Marker({position: uluru, map: map});
  
}
}