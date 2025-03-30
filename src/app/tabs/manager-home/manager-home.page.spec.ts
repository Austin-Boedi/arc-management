import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ManagerHomePage } from './manager-home.page';

describe('ManagerHomePage', () => {
  let component: ManagerHomePage;
  let fixture: ComponentFixture<ManagerHomePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
