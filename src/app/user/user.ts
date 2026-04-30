import { Component } from '@angular/core';
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
  selectedUser = MOCK_USERS[randomIndex];
}
