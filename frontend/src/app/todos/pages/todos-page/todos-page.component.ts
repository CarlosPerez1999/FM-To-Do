import { rxResource } from '@angular/core/rxjs-interop';
import { Component, inject, OnInit, signal } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { HeroComponent } from "../../components/hero/todo-hero.component";
import { TodoInputComponent } from "../../components/todo-input/todo-input.component";
import { TodoListComponent } from "../../components/todo-list/todo-list.component";
import { TaskI } from '../../interfaces/task.interface';

@Component({
  selector: 'app-todos-page',
  imports: [HeroComponent, TodoInputComponent, TodoListComponent],
  templateUrl: './todos-page.component.html',
})
export class TodosPageComponent implements OnInit {
  tasksService = inject(TasksService)

  todos = this.tasksService.tasks$

  ngOnInit(): void {
    this.tasksService.getTasks().subscribe()
  }

  addTodo(newTask: TaskI) {
    this.tasksService.createTask(newTask).subscribe();
  }

}
