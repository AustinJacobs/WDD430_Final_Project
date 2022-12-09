import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { House } from '../house.model';
import { HouseService } from '../house.service';
import { WindRefService } from 'src/app/win-ref.service';

@Component({
  selector: 'app-house-detail',
  templateUrl: './house-detail.component.html',
  styleUrls: ['./house-detail.component.css'],
})
export class HouseDetailComponent implements OnInit {
  house: House;
  nativeWindow: any;

  constructor(
    private houseService: HouseService,
    private router: Router,
    private route: ActivatedRoute,
    private windowRefService: WindRefService
  ) {
    this.nativeWindow = windowRefService.getNativeWindow();
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.house = this.houseService.getHouse(params['id']);
    });
  }

  onView() {
    if (this.house.url) {
      this.nativeWindow.open(this.house.url);
    }
  }

  onDelete() {
    this.houseService.deleteHouse(this.house);
    this.router.navigate(['/houses'], { relativeTo: this.route });
  }
}
