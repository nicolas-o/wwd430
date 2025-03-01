import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,

  templateUrl: './header.component.html',
})
export class HeaderComponent {
  @Output() selectedFeatureEvent = new EventEmitter<string>(); // Event emitter

  onSelected(selectedEvent: string) {
    this.selectedFeatureEvent.emit(selectedEvent); // Emit event with selected feature
  }
}
