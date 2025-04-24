import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-debug-button',
  standalone: true,
  imports: [IonicModule],
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title>Debug Button</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <h2>Standalone Button Test</h2>
      <ion-button expand="block" (click)="onClick()">
        🚀 Test Click
      </ion-button>
    </ion-content>
  `
})
export class DebugButtonPage {
  onClick() {
    alert('✅ Click event fired!');
    console.log('✅ Button clicked');
  }
}