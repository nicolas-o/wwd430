import { Component, ElementRef, ViewChild } from '@angular/core';
import { Message } from '../message.model';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-message-edit',
  standalone: false,

  templateUrl: './message-edit.component.html',
  styleUrl: './message-edit.component.css',
})
export class MessageEditComponent {
  @ViewChild('subject', { static: false }) subjectRef!: ElementRef;
  @ViewChild('msgText', { static: false }) msgTextRef!: ElementRef;

  constructor(private messageService: MessageService) {}

  onSendMessage(): void {
    const subject = this.subjectRef.nativeElement.value;
    const msgText = this.msgTextRef.nativeElement.value;
    const newMessage = new Message(
      Math.random().toString(),
      subject,
      msgText,
      '1'
    );

    this.messageService.addMessage(newMessage);
  }

  onClear(): void {
    this.subjectRef.nativeElement.value = '';
    this.msgTextRef.nativeElement.value = '';
  }
}
