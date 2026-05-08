import { Component, Input, Output } from '@angular/core';
import { Task } from './task.model';


@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
  styleUrls: ['./task.css'],
})
export class TaskComponent {
  @Input({required: true}) task!: Task;


  get selectedTask()  {   
    return {
      title: this.task.title,
      summary: this.task.summary,
      dueDate: this.task.dueDate
    }
  }
}
