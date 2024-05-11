import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MegamenuComponent } from './megamenu.component';

describe('MegamenuComponent', () => {
  let component: MegamenuComponent;
  let fixture: ComponentFixture<MegamenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MegamenuComponent]
    });
    fixture = TestBed.createComponent(MegamenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
