import {
  Component,
  EventEmitter,
  Output,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { Message } from '../message.model';

@Component({
  selector: 'app-message-edit',
  standalone: false,
  templateUrl: './message-edit.component.html',
  styleUrl: './message-edit.component.css',
})
export class MessageEditComponent {
  @ViewChild('subject') subjectInputRef!: ElementRef;
  @ViewChild('msgText') msgTextInputRef!: ElementRef;

  @Output() addMessageEvent = new EventEmitter<Message>();

  currentSender: string = 'Nicolas Orellana';

  onSendMessage() {
    const subject = this.subjectInputRef.nativeElement.value.trim();
    const msgText = this.msgTextInputRef.nativeElement.value.trim();

    if (!subject || !msgText) return;

    const newMessage = new Message(
      Math.random().toString(),
      subject,
      msgText,
      this.currentSender
    );

    this.addMessageEvent.emit(newMessage);

    this.onClear();
  }

  onClear() {
    this.subjectInputRef.nativeElement.value = '';
    this.msgTextInputRef.nativeElement.value = '';
  }
}
