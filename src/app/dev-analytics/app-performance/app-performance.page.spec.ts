import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { AppPerformancePage } from './app-performance.page';

describe('AppPerformancePage', () => {
  let component: AppPerformancePage;
  let fixture: ComponentFixture<AppPerformancePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppPerformancePage, IonicModule], // 👈 Import standalone component and IonicModule here
    }).compileComponents();

    fixture = TestBed.createComponent(AppPerformancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should correctly calculate average load time', () => {
    component.appLoadTimes = [1, 2, 3];
    component.calculateAverage();
    expect(component.averageLoadTime).toEqual(2);
  });
});