import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.html',
  styleUrls: ['./user.css'],
})

export class UserComponent {
  @Input() id!: string;
  @Input() avatar!: string;
  @Input() name!: string;

  @Output() selected = new EventEmitter<string>();

  get imagePath(): string {
    return `assets/users/${this.avatar}`;
  }

  onSelectUser() {
    this.selected.emit(this.id);
  } 
}

