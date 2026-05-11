import { Component, Input, Output, EventEmitter } from '@angular/core';
import { type Task } from './task.model';


@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
  styleUrls: ['./task.css'],
})
export class TaskComponent {
  @Input({required: true}) task!: Task;
  @Output() complete = new EventEmitter<string>();

  markAsComplete() {
    this.complete.emit(this.task.id);
  }
}
