import { Component, EventEmitter, Output } from '@angular/core';
import { Document } from '../document.model';

@Component({
  selector: 'app-document-list',
  standalone: false,

  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css'],
})
export class DocumentListComponent {
  @Output() selectedDocumentEvent = new EventEmitter<Document>();

  documents = [
    {
      id: 1,
      name: 'Project Proposal',
      description: 'A proposal for the upcoming project.',
      url: 'https://example.com/project-proposal.pdf',
    },
    {
      id: 2,
      name: 'Team Guidelines',
      description: 'Guidelines for the project team members.',
      url: 'https://example.com/team-guidelines.pdf',
    },
    {
      id: 3,
      name: 'Budget Report',
      description: 'Detailed budget report for Q1.',
      url: 'https://example.com/budget-report.pdf',
    },
    {
      id: 4,
      name: 'Design Document',
      description: 'UI/UX design document for the application.',
      url: 'https://example.com/design-document.pdf',
    },
    {
      id: 5,
      name: 'User Manual',
      description: 'Instructions for using the application.',
      url: 'https://example.com/user-manual.pdf',
    },
  ];

  onSelectedDocument(document: Document) {
    this.selectedDocumentEvent.emit(document);
  }
}
