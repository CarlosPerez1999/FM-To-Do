import { Component, output, signal } from '@angular/core';
import {FormsModule} from '@angular/forms'
@Component({
  selector: 'todo-input',
  imports: [FormsModule],
  templateUrl: './todo-input.component.html',
})
export class TodoInputComponent {
  todoTitle = signal<string>("")
  create = output<string>()


  createTodo(){
    this.create.emit(this.todoTitle())
    this.todoTitle.set("")
  }



}
