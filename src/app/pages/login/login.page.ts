import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Auth, onAuthStateChanged } from '@angular/fire/auth';
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
    if (this.platform.is('ios') || this.platform.is('android')) {
      this.initializeKeyboard();
    }
  }

  initializeKeyboard() {
    document.addEventListener('focusin', () => {
      Keyboard.show();
    });

    document.addEventListener('click', () => {
      Keyboard.hide();
    });
  }

  async login() {
    const { email, password } = this.loginForm.value;

    try {
      const userCredential = await signInWithEmailAndPassword(this.auth, email, password);
      const uid = userCredential.user.uid;

      const docRef = doc(this.firestore, 'users', uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        const role: any = data['role'];

        console.log('User role:', role);
        localStorage.setItem('userRole', role);

        switch (role) {
          case 'user':
          case 'manager':
          case 'dev':
            console.log('Navigating to /tabs');
            this.router.navigateByUrl('/tabs');
            break;
          default:
            this.errorMessage = 'Unknown user role: ' + role;
        }
      } else {
        this.errorMessage = 'No user data found.';
      }
    } catch (error: any) {
      this.errorMessage = error.message;
    }
  }
}