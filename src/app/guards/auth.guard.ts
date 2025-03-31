// src/app/guards/auth.guard.ts

import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Auth, onAuthStateChanged } from '@angular/fire/auth';
import { Observable } from 'rxjs';

export const authGuard: CanActivateFn = (): Observable<boolean> => {
  const auth = inject(Auth);
  const router = inject(Router);

  return new Observable<boolean>((subscriber) => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log('[AuthGuard] Fired. User:', user);
      if (user) {
        subscriber.next(true);
      } else {
        console.log('[AuthGuard] No user.')
        router.navigate(['/login']);
        subscriber.next(false);
      }
      subscriber.complete();
    });

    // Clean up listener on unsubscribe
    return { unsubscribe };
  });
};