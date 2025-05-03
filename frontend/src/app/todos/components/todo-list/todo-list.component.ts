import { CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, computed, inject, input } from '@angular/core';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TaskI } from '../../interfaces/task.interface';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'todo-list',
  imports: [TodoItemComponent, CdkDropList, CdkDrag],
  templateUrl: './todo-list.component.html',
})
export class TodoListComponent {
  todos = input<TaskI[] | undefined>();
  tasksService = inject(TasksService);
  todosLeft = computed(() => {
    return this.todos()?.filter((todo) => todo.completed === false);
  });

  delete(id: number) {
    this.tasksService.deleteTask(id).subscribe();
  }
  deleteCompleted() {
    const todosToDelete: TaskI[] | undefined = this.todos()?.filter(
      (todo) => todo.completed === true
    );
    if (todosToDelete !== undefined && todosToDelete?.length >= 0) {
      for (let todo of todosToDelete) {
        this.tasksService.deleteTask(todo.id).subscribe();
      }
    }
  }

  toggle(task: TaskI) {
    this.tasksService
      .updateTask(task.id, {
        ...task,
        completed: !task.completed,
      })
      .subscribe();
  }

  drop(event: CdkDragDrop<TaskI>) {
    moveItemInArray(this.todos()!, event.previousIndex, event.currentIndex);
  }
}
