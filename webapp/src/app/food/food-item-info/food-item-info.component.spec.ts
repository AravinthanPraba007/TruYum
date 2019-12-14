import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodItemInfoComponent } from './food-item-info.component';

describe('FoodItemInfoComponent', () => {
  let component: FoodItemInfoComponent;
  let fixture: ComponentFixture<FoodItemInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodItemInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodItemInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
