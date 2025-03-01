import { Component } from '@angular/core';
import { Document } from './document.model';

@Component({
  selector: 'app-documents',
  standalone: false,

  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css'],
})
export class DocumentsComponent {
  selectedDocument!: Document;

  onDocumentSelected(document: Document) {
    this.selectedDocument = document;
  }
}
