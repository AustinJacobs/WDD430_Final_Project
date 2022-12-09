import { Component, OnInit, OnDestroy } from '@angular/core';
import { House } from '../house.model';
import { HouseService } from '../house.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-house-list',
  templateUrl: './house-list.component.html',
  styleUrls: ['./house-list.component.css'],
})
export class HouseListComponent implements OnInit {
  houses: House[] = [];

  private subscription: Subscription;

  constructor(private houseService: HouseService) {}

  ngOnInit(): void {
    this.subscription = this.houseService.houseListChangedEvent.subscribe(
      (houses: House[]) => {
        this.houses = houses;
      }
    );
    this.houseService.getHouses();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
