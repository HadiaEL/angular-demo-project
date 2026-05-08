import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task';
import { MOCK_TASKS } from './list-tasks-mock';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.html',
  styleUrls: ['./tasks.css'],
})
export class TasksComponent {
  @Input({required: true}) userId!: string;
  @Input({required : true}) name!: string;
  tasks = MOCK_TASKS;

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.userId);
  }

}
