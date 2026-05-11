import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTaskData } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrls: ['./new-task.css'],
})
export class NewTaskComponent {
  @Input({ required: true }) userId!: string;
  @Output() close = new EventEmitter<void>();
  @Output() submit = new EventEmitter<{ newTask: NewTaskData }>();

  enteredTaskTitle = '';
  enteredTaskSummary = '';
  enteredTaskDate = '';
  private tasksService = inject(TasksService);

  onCancel() {
    this.close.emit();
  }

  onSubmit() {
    this.tasksService.addTask(
      {
        title: this.enteredTaskTitle,
        summary: this.enteredTaskSummary,
        date: this.enteredTaskDate,
      },
      this.userId,
    );
    this.close.emit();
  }
}
