import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFavoriteDrinksComponent } from './add-favorite-drinks.component';

describe('AddFavoriteDrinksComponent', () => {
  let component: AddFavoriteDrinksComponent;
  let fixture: ComponentFixture<AddFavoriteDrinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFavoriteDrinksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFavoriteDrinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
