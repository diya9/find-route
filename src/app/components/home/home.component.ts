import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { } from '@types/googlemaps';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;
  origin: string;
  destination: string;
  start: any;

  constructor(private route: Router) { }

  ngOnInit() {
    this.start = {lat: 18.5793, lng: 73.8143};
    var map = new google.maps.Map(
      this.gmapElement.nativeElement, {zoom: 4, center: this.start});
    var marker = new google.maps.Marker({position: this.start, map: map});
  }

  setDirection(){
    this.route.navigate(['/direction',this.origin, this.destination]);
    this.origin = '';
    this.destination = '';
  }

}
