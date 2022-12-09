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
  houses: House[] = [
    new House('$500,000', '11-25-1997', '6339 N 2nd St Tetonia, Idaho 83452', 'Single Family Dwelling', '1997', '3,097', '$188', 'Yes', 'This is a really nice house.', '200', 'https://www.zillow.com/homedetails/4415-Greenwillow-Ln-Idaho-Falls-ID-83401/2140366302_zpid/'),
  ];

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
