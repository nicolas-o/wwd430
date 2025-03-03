import { Injectable, EventEmitter } from '@angular/core';
import { Document } from './document.model';
import { MOCKDOCUMENTS } from './MOCKDOCUMENTS';

@Injectable({
  providedIn: 'root',
})
export class DocumentService {
  documents: Document[] = [];
  documentChangedEvent = new EventEmitter<Document[]>();

  constructor() {
    this.documents = MOCKDOCUMENTS;
  }

  getDocuments(): Document[] {
    return this.documents.slice();
  }

  getDocument(id: string): Document | null {
    return this.documents.find((document) => document.id === id) || null;
  }

  addDocument(document: Document) {
    if (!document) {
      return;
    }
    this.documents.push(document);
    this.documentChangedEvent.emit(this.documents.slice());
  }

  updateDocument(updatedDocument: Document) {
    if (!updatedDocument) {
      return;
    }
    const pos = this.documents.findIndex((d) => d.id === updatedDocument.id);
    if (pos < 0) {
      return;
    }
    this.documents[pos] = updatedDocument;
    this.documentChangedEvent.emit(this.documents.slice());
  }

  deleteDocument(document: Document | null) {
    if (!document) {
      return;
    }
    const pos = this.documents.indexOf(document);
    if (pos < 0) {
      return;
    }
    this.documents.splice(pos, 1);
    this.documentChangedEvent.emit(this.documents.slice());
  }
}
