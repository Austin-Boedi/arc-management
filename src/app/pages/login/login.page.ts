import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Auth } from '@angular/fire/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { doc, getDoc, Firestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LoginPage {
  loginForm: FormGroup;
  errorMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private auth: Auth,
    private firestore: Firestore,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  async login() {
    const { email, password } = this.loginForm.value;
  
    try {
      const userCredential = await signInWithEmailAndPassword(this.auth, email, password);
      const uid = userCredential.user.uid;
  
      // Fetch role from Firestore
      const docRef = doc(this.firestore, 'users', uid);
      const docSnap = await getDoc(docRef);
  
      if (docSnap.exists()) {
        const role = docSnap.data()['role'];
  
        // Navigate based on role
        switch (role) {
          case 'user':
            this.router.navigate(['/tabs/user-home']);
            break;
          case 'manager':
            this.router.navigate(['/tabs/manager-home']);
            break;
          case 'dev':
            this.router.navigate(['/tabs/dev-home']);
            break;
          default:
            this.errorMessage = 'Unknown user role.';
        }
      } else {
        this.errorMessage = 'No user data found.';
      }
    } catch (error: any) {
      this.errorMessage = error.message;
    }
  }  
}