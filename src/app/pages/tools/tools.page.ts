import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-tools',
  standalone: true,
  templateUrl: './tools.page.html',
  imports: [
    IonicModule,
    CommonModule
  ]
})
export class ToolsPage {}