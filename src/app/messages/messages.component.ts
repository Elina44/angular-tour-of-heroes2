import { Component } from '@angular/core';
import { MessageService } from '../message.service';


@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {
/*on le met public pour pouvoir le lier dans le modèle*/
  constructor(public messageService: MessageService) {}
}
