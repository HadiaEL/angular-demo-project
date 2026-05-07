import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.html',
  styleUrls: ['./user.css'],
})

export class UserComponent {
  @Input({required: true}) user !: { 
    id: string; 
    name: string; 
    avatar: string 
  };

  @Output() selected = new EventEmitter<string>();

  get imagePath(): string {
    return `assets/users/${this.user.avatar}`;
  }

  onSelectUser() {
    this.selected.emit(this.user.id);
  } 
}

