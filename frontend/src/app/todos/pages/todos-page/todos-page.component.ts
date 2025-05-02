import { rxResource } from '@angular/core/rxjs-interop';
import { Component, inject } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { HeroComponent } from "../../components/hero/todo-hero.component";
import { TodoInputComponent } from "../../components/todo-input/todo-input.component";

@Component({
  selector: 'app-todos-page',
  imports: [HeroComponent, TodoInputComponent],
  templateUrl: './todos-page.component.html',
})
export class TodosPageComponent {
  tasksService = inject(TasksService)

  tasksResource = rxResource({
    request: () => this.tasksService.getTasks(),
    loader: () => this.tasksService.getTasks()
  })

}
