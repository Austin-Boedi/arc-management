import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FirebaseMetricsPage } from './firebase-metrics.page';

describe('FirebaseMetricsPage', () => {
  let component: FirebaseMetricsPage;
  let fixture: ComponentFixture<FirebaseMetricsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FirebaseMetricsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
