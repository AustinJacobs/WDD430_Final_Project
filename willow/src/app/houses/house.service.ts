import { Injectable } from '@angular/core';
import { House } from './house.model';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HouseService {
  houses: House[] = [];

  houseListChangedEvent = new Subject<House[]>();

  maxHouseId: number;

  constructor(private http: HttpClient) {
    this.getHouses();
    this.maxHouseId = this.getMaxId();
  }

  sortAndSend() {
    this.houses.sort((first, second) => {
      if (first < second) return -1;
      if (first > second) return 1;
      return 0;
    });
    this.houseListChangedEvent.next(this.houses.slice());
  }

  getHouses() {
    this.http
      .get<{ message: string; houses: House[] }>(
        'http://localhost:3000/houses/'
      )
      // .subscribe((houseData) => {
      //   this.houses = houseData.houses;
      //   this.sortAndSend();
      // });
    .subscribe({
      next: (response) => {
        console.log(response.message);
        this.houses = response.houses;
        this.sortAndSend();
      },
      error: (error) => {
        console.error(error.message);
        console.error(error.error);
      },
    });
  }

  getHouse(id: string): House {
    return this.houses.find((d) => d.id === id);
  }

  getMaxId(): number {
    let maxId = 0;
    for (const house of this.houses) {
      const currentId = +house.id;
      if (currentId > maxId) {
        maxId = currentId;
      }
    }
    return maxId;
  }

  addHouse(newHouse: House) {
    if (!newHouse) return;
    newHouse.id = '';
    this.http
      .post<{ message: string; house: House }>(
        'http://localhost:3000/houses',
        newHouse,
        { headers: new HttpHeaders().set('Content-Type', 'application/json') }
      )
      .subscribe({
        next: (response) => {
          console.log(response.message);
          this.houses.push(response.house);
          this.sortAndSend();
        },
        error: (error) => {
          console.error(error.message);
          console.error(error.error);
        },
      });
  }

  updateHouse(original: House, newHouse: House) {
    if (!newHouse || !original) return;
    const pos = this.houses.indexOf(original);
    if (pos < 0) return;

    newHouse.id = original.id;
    newHouse._id = original._id;
    this.http
      .put<{ message: string }>(
        'http://localhost:3000/houses/' + original.id,
        newHouse,
        {
          headers: new HttpHeaders().set('Content-Type', 'application/json'),
        }
      )
      .subscribe({
        next: (response) => {
          console.log(response.message);
          this.houses[pos] = newHouse;
          this.sortAndSend();
        },
        error: (error) => {
          console.error(error.message);
          console.error(error.error);
        },
      });
  }

  deleteHouse(house: House) {
    if (!house) return;
    const pos = this.houses.indexOf(house);
    if (pos < 0) return;
    this.http
      .delete<{ message: string }>('http://localhost:3000/houses/' + house.id)
      .subscribe({
        next: (response) => {
          console.log(response.message);
          this.houses.splice(pos, 1);
          this.sortAndSend();
        },
        error: (error) => {
          console.error(error.message);
          console.error(error.error);
        },
      });
  }
}
