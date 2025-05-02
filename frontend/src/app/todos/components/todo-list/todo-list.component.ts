import { Component, inject, input } from '@angular/core';
import { TodoItemComponent } from "./todo-item/todo-item.component";
import { TaskI } from '../../interfaces/task.interface';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'todo-list',
  imports: [TodoItemComponent],
  templateUrl: './todo-list.component.html',
})
export class TodoListComponent { 
  todos = input<TaskI[] | undefined>()
  tasksService = inject(TasksService)

  delete(id: number) {
    this.tasksService.deleteTask(id).subscribe();
  }
  
  toggle(task: TaskI) {
    this.tasksService.updateTask(task.id, {
      ...task,
      completed: !task.completed,
    }).subscribe();
  }

}
