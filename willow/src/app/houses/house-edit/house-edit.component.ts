import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HouseService } from '../house.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { House } from '../house.model';

@Component({
  selector: 'app-house-edit',
  templateUrl: './house-edit.component.html',
  styleUrls: ['./house-edit.component.css'],
})
export class HouseEditComponent implements OnInit {
  originalHouse: House;
  house: House;
  editMode: boolean = false;

  constructor(
    private houseService: HouseService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params['id'];
      if (id === undefined || id === null) {
        this.editMode = false;
        return;
      }
      this.originalHouse = this.houseService.getHouse(id);
      if (this.originalHouse === undefined || this.originalHouse === null) {
        return;
      }
      this.editMode = true;
      this.house = JSON.parse(JSON.stringify(this.originalHouse));
    });
  }

  onCancel() {
    this.router.navigate(['/houses'], { relativeTo: this.route });
  }

  onSubmit(form: NgForm) {
    const values = form.value;
    const newHouse = new House(
      values.price,
      values.listDate,
      values.address,
      values.residenceType,
      values.yearBuilt,
      values.sqFeet,
      values.pricePerSqFeet,
      values.availability,
      values.propertyDescription,
      values.lengthTimeListed,
      values.url
    );
    if (this.editMode) {
      this.houseService.updateHouse(this.originalHouse, newHouse);
    } else {
      this.houseService.addHouse(newHouse);
    }
    this.router.navigate(['/houses'], { relativeTo: this.route });
  }
}
