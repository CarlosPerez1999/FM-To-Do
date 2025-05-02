import { Component, output, signal } from '@angular/core';
import {FormsModule} from '@angular/forms'
@Component({
  selector: 'todo-input',
  imports: [FormsModule],
  templateUrl: './todo-input.component.html',
})
export class TodoInputComponent {
  todoTitle = signal<string>("")
  createEmmiter = output<string>()


  createTodo(){
    this.createEmmiter.emit(this.todoTitle())
    console.log(this.todoTitle())
    this.todoTitle.set("")
  }



}
