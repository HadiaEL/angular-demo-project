import { Component, signal } from '@angular/core';
import {MOCK_USERS} from './list-users-mock';

const randomIndex = Math.floor(Math.random() * MOCK_USERS.length);
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.html',
  styleUrls: ['./user.css'],
})

export class UserComponent {
  selectedUser = signal(MOCK_USERS[randomIndex]);

  get imagePath(): string {
    return `assets/users/${this.selectedUser().avatar}`;
  } 

  onSelectUser() {
    const randomIndex = Math.floor(Math.random() * MOCK_USERS.length);
    this.selectedUser.set(MOCK_USERS[randomIndex]);
  } 

}

