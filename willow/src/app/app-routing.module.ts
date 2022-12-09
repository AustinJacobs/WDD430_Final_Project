import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HousesComponent } from './houses/houses.component';
import { HouseEditComponent } from './houses/house-edit/house-edit.component';
import { HouseDetailComponent } from './houses/house-detail/house-detail.component';
import { ApartmentsComponent } from './apartments/apartments.component';
import { ApartmentEditComponent } from './apartments/apartment-edit/apartment-edit.component';
import { ApartmentDetailComponent } from './apartments/apartment-detail/apartment-detail.component';
import { LandComponent } from './land/land.component';
import { LandEditComponent } from './land/land-edit/land-edit.component';
import { LandDetailComponent } from './land/land-detail/land-detail.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/houses',
    pathMatch: 'full',
  },
  {
    path: 'houses',
    component: HousesComponent,
    children: [
      {
        path: 'new',
        component: HouseEditComponent,
      },
      {
        path: ':id',
        component: HouseDetailComponent,
      },
      {
        path: ':id/edit',
        component: HouseEditComponent,
      },
    ],
  },
  {
    path: 'apartments',
    component: ApartmentsComponent,
    children: [
      {
        path: 'new',
        component: ApartmentEditComponent,
      },
      {
        path: ':id',
        component: ApartmentDetailComponent,
      },
      {
        path: ':id/edit',
        component: ApartmentEditComponent,
      },
    ],
  },
  {
    path: 'land',
    component: LandComponent,
    children: [
      {
        path: 'new',
        component: LandEditComponent,
      },
      {
        path: ':id',
        component: LandDetailComponent,
      },
      {
        path: ':id/edit',
        component: LandEditComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
