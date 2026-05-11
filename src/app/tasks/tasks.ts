import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task';
import { NewTaskComponent } from './new-task/new-task';
import { NewTaskData } from './task/task.model';
import { tasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent , NewTaskComponent],
  templateUrl: './tasks.html',
  styleUrls: ['./tasks.css'],
})

export class TasksComponent {
  @Input({required: true}) userId!: string;
  @Input({required : true}) name!: string;
  
  isAddingTask = false;

  get selectedUserTasks() {
    return tasksService.getUserTasks(this.userId);
  }

  onCompleteTask(taskId: string) {
    tasksService.completeTask(taskId);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCancelAddTask() {
    this.isAddingTask = false;
  }

  onSubmitAddTask(taskData : NewTaskData) {
    tasksService.addTask(taskData, this.userId);
    this.isAddingTask = false;
  }

}
