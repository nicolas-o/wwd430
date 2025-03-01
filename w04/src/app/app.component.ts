import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
})
export class AppComponent {
  selectedFeature: string = 'documents'; // Default view

  switchView(selectedFeature: string) {
    this.selectedFeature = selectedFeature; // Update selected feature
  }
}
