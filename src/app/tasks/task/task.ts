import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
  styleUrls: ['./task.css'],
})
export class TaskComponent {
  @Input({required: true}) task!: {
    title: string;
    summary?: string;
    dueDate?: string;
  };


  get selectedTask()  {   
    return {
      title: this.task.title,
      summary: this.task.summary,
      dueDate: this.task.dueDate
    }
  }
}
