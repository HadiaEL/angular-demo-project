import { Component, Input, Output, EventEmitter } from '@angular/core';
import { type Task } from './task.model';
import { Card } from "../../shared/card/card";


@Component({
  selector: 'app-task',
  imports: [Card],
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
