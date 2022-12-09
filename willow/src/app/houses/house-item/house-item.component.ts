import { Component, Input, OnInit } from '@angular/core';
import { House } from '../house.model';

@Component({
  selector: 'app-house-item',
  templateUrl: './house-item.component.html',
  styleUrls: ['./house-item.component.css'],
})
export class HouseItemComponent implements OnInit {
  @Input() house: House;

  constructor() {}

  ngOnInit(): void {}
}
