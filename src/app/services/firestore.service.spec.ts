import { TestBed } from '@angular/core/testing';
import { FirestoreService } from './firestore.service';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { environment } from '../../environments/environment';

describe('FirestoreService', () => {
  let service: FirestoreService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        FirestoreService,
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideFirestore(() => getFirestore())
      ]
    }).compileComponents();

    service = TestBed.inject(FirestoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});