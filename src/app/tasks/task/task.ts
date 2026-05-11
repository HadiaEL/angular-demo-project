import { Component, Input, Output, EventEmitter } from '@angular/core';
import { type Task } from './task.model';
import { CardComponent } from "../../shared/card/card";
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-task',
  imports: [CardComponent , DatePipe],
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
