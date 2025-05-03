import { rxResource } from '@angular/core/rxjs-interop';
import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { HeroComponent } from '../../components/hero/todo-hero.component';
import { TodoInputComponent } from '../../components/todo-input/todo-input.component';
import { TodoListComponent } from '../../components/todo-list/todo-list.component';
import { TaskI } from '../../interfaces/task.interface';
import { TodoFilterComponent } from '../../components/todo-filter/todo-filter.component';
import { filter } from 'rxjs';

@Component({
  selector: 'app-todos-page',
  imports: [
    HeroComponent,
    TodoInputComponent,
    TodoListComponent,
    TodoFilterComponent,
  ],
  templateUrl: './todos-page.component.html',
})
export class TodosPageComponent implements OnInit {
  tasksService = inject(TasksService);

  todos = this.tasksService.tasks$;
  selectedFilter = signal<string>('All');

  filteredTodos = computed(() => {
    if (this.selectedFilter() === 'Active') {
      return this.todos().filter((todo) => todo.completed === false);
    }
    if (this.selectedFilter() === 'Completed') {
      return this.todos().filter((todo) => todo.completed === true);
    }
    return this.todos();
  });

  ngOnInit(): void {
    this.tasksService.getTasks().subscribe();
  }

  create(title: string) {
    const newTodo: Partial<TaskI> = {
      title: title,
      description: '',
    };
    this.tasksService.createTask(newTodo).subscribe();
  }

  changeFilter(filter: string) {
    this.selectedFilter.set(filter);
  }
}
