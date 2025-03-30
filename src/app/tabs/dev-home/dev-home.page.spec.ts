import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DevHomePage } from './dev-home.page';

describe('DevHomePage', () => {
  let component: DevHomePage;
  let fixture: ComponentFixture<DevHomePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DevHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
