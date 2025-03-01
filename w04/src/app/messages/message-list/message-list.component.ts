import { Component } from '@angular/core';
import { Message } from '../message.model';

@Component({
  selector: 'app-message-list',
  standalone: false,
  templateUrl: './message-list.component.html',
  styleUrl: './message-list.component.css',
})
export class MessageListComponent {
  messages: Message[] = [
    new Message(
      '1',
      'Meeting Reminder',
      "Don't forget our team meeting at 10 AM.",
      'Alice Johnson'
    ),
    new Message(
      '2',
      'Project Update',
      'The final version of the project has been deployed.',
      'Bob Smith'
    ),
    new Message(
      '3',
      'Lunch Plans',
      'Are you free for lunch today?',
      'Charlie Davis'
    ),
  ];

  onAddMessage(message: Message) {
    this.messages.push(message);
  }
}
