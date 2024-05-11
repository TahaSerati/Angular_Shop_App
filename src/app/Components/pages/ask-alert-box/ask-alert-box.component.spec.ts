import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AskAlertBoxComponent } from './ask-alert-box.component';

describe('AskAlertBoxComponent', () => {
  let component: AskAlertBoxComponent;
  let fixture: ComponentFixture<AskAlertBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AskAlertBoxComponent]
    });
    fixture = TestBed.createComponent(AskAlertBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
