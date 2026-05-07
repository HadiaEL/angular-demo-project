import { Component, signal } from '@angular/core';
import { HeaderComponent } from "./header/header";
import { UserComponent } from "./user/user";
import {MOCK_USERS} from "./user/list-users-mock";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('angular-demo-project');
  users = MOCK_USERS;

  onSelectedUser(id: string) {
    console.log(`User with id ${id} selected`);
  }
}
