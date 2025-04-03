import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NetworkAnalyticsPage } from './network-analytics.page';

describe('NetworkAnalyticsPage', () => {
  let component: NetworkAnalyticsPage;
  let fixture: ComponentFixture<NetworkAnalyticsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NetworkAnalyticsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
