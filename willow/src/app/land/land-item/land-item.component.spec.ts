import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandItemComponent } from './land-item.component';

describe('LandItemComponent', () => {
  let component: LandItemComponent;
  let fixture: ComponentFixture<LandItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
