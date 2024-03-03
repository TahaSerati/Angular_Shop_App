import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSliderLgComponent } from './product-slider-lg.component';

describe('ProductSliderLgComponent', () => {
  let component: ProductSliderLgComponent;
  let fixture: ComponentFixture<ProductSliderLgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductSliderLgComponent]
    });
    fixture = TestBed.createComponent(ProductSliderLgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
