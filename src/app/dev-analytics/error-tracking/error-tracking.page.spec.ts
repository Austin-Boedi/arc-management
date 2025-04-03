import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ErrorTrackingPage } from './error-tracking.page';

describe('ErrorTrackingPage', () => {
  let component: ErrorTrackingPage;
  let fixture: ComponentFixture<ErrorTrackingPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorTrackingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
