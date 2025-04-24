// src/app/guards/auth.guard.ts

import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Auth, onAuthStateChanged } from '@angular/fire/auth';

export const authGuard: CanActivateFn = async () => {
  const auth = inject(Auth);
  const router = inject(Router);

  const user = await new Promise((resolve) => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log('[AuthGuard] onAuthStateChanged fired. User:', user); // Debug log
      resolve(user);
      unsubscribe();
    });
  });

  const cachedRole = localStorage.getItem('userRole');
  console.log('[AuthGuard] Checked. Firebase user:', user);
  console.log('[AuthGuard] Cached role:', cachedRole);

  if (user || cachedRole) {
    return true;
  } else {
    console.log('[AuthGuard] No user or role found — redirecting');
    router.navigate(['/login']);
    return false;
  }
};