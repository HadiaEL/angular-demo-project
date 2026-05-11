import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTaskData } from '../task/task.model';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrls: ['./new-task.css'],
})
export class NewTaskComponent {
  @Output() cancel = new EventEmitter<void>();
  @Output() submit = new EventEmitter<{ newTask: NewTaskData }>();

  enteredTaskTitle = '';
  enteredTaskSummary = '';
  enteredTaskDate = '';

  onCancel() {
    this.cancel.emit();
  }

  onSubmit() {
    const newTask: NewTaskData = {
      title: this.enteredTaskTitle,
      summary: this.enteredTaskSummary,
      date: this.enteredTaskDate,
    };
    this.submit.emit({ newTask });
  }

}
