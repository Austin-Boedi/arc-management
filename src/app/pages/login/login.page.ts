import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Auth } from '@angular/fire/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Router } from '@angular/router';
import { IonicModule, Platform } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { doc, getDoc, Firestore } from '@angular/fire/firestore';
import { Keyboard } from '@capacitor/keyboard';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  errorMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private auth: Auth,
    private firestore: Firestore,
    private router: Router,
    private platform: Platform
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  ngOnInit() {
    // Only initialize keyboard handling on native platforms (iOS/Android)
    if (this.platform.is('ios') || this.platform.is('android')) {
      this.initializeKeyboard();
    }
  }

  initializeKeyboard() {
    // Listen for the input field being focused to show the keyboard
    document.addEventListener('focusin', () => {
      Keyboard.show();
    });

    // Hide the keyboard when tapping outside the input fields
    document.addEventListener('click', () => {
      Keyboard.hide();
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

        // Optional: Cache the role
        localStorage.setItem('userRole', role);

        // Navigate to shared dynamic home route
        this.router.navigate(['/tabs/home']);
      } else {
        this.errorMessage = 'No user data found.';
      }
    } catch (error: any) {
      this.errorMessage = error.message;
    }
  }  
}