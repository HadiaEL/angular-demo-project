import { Component, Input } from '@angular/core';
import {MOCK_USERS} from './list-users-mock';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.html',
  styleUrls: ['./user.css'],
})

export class UserComponent {
  @Input() avatar!: string;
  @Input() name!: string;

  get imagePath(): string {
    return `assets/users/${this.avatar}`;
  }

  onSelectUser() {
  } 
}

