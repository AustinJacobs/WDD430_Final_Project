import { Component, OnInit } from '@angular/core';
import { House } from './house.model';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css'],
})
export class HousesComponent implements OnInit{
  selectedHouse: House;

  constructor() {}

  ngOnInit(): void {}
}
