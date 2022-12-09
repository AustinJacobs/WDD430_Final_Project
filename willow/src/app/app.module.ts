import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { HousesComponent } from './houses/houses.component';
import { ApartmentsComponent } from './apartments/apartments.component';
import { LandComponent } from './land/land.component';
import { AppRoutingModule } from './app-routing.module';
import { ApartmentDetailComponent } from './apartments/apartment-detail/apartment-detail.component';
import { ApartmentEditComponent } from './apartments/apartment-edit/apartment-edit.component';
import { ApartmentItemComponent } from './apartments/apartment-item/apartment-item.component';
import { ApartmentListComponent } from './apartments/apartment-list/apartment-list.component';
import { HouseDetailComponent } from './houses/house-detail/house-detail.component';
import { HouseEditComponent } from './houses/house-edit/house-edit.component';
import { HouseItemComponent } from './houses/house-item/house-item.component';
import { HouseListComponent } from './houses/house-list/house-list.component';
import { LandDetailComponent } from './land/land-detail/land-detail.component';
import { LandEditComponent } from './land/land-edit/land-edit.component';
import { LandItemComponent } from './land/land-item/land-item.component';
import { LandListComponent } from './land/land-list/land-list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HousesComponent,
    ApartmentsComponent,
    LandComponent,
    ApartmentDetailComponent,
    ApartmentEditComponent,
    ApartmentItemComponent,
    ApartmentListComponent,
    HouseDetailComponent,
    HouseEditComponent,
    HouseItemComponent,
    HouseListComponent,
    LandDetailComponent,
    LandEditComponent,
    LandItemComponent,
    LandListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
