import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
  styleUrls: ['./task.css'],
})
export class TaskComponent {
  @Input({required: true}) title!: string;
  @Input() summary?: string;
  @Input() dueDate?: string;


  get selectedTask()  {   
    return {
      title: this.title,
      summary: this.summary,
      dueDate: this.dueDate
    }
  }
}
