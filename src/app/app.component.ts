import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    IonicModule,
    RouterModule, // Needed for <ion-router-outlet>
  ],
  templateUrl: 'app.component.html',
})
export class AppComponent {}