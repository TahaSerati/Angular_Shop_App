import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSliderMdComponent } from './product-slider-md.component';

describe('ProductSliderMdComponent', () => {
  let component: ProductSliderMdComponent;
  let fixture: ComponentFixture<ProductSliderMdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductSliderMdComponent]
    });
    fixture = TestBed.createComponent(ProductSliderMdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
