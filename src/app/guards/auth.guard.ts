// src/app/guards/auth.guard.ts

import { inject } from '@angular/core';
import {
  CanActivateFn,
  Router
} from '@angular/router';
import { Auth, onAuthStateChanged } from '@angular/fire/auth';
import { from, map } from 'rxjs';

export const authGuard: CanActivateFn = () => {
  const auth = inject(Auth);
  const router = inject(Router);

  return from(
    new Promise<boolean>((resolve) => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          resolve(true);
        } else {
          router.navigate(['/login']);
          resolve(false);
        }
      });
    })
  );
};