import { Component, input, output, signal } from '@angular/core';
import { TaskI } from '../../../interfaces/task.interface';
import { NgClass } from '@angular/common';

@Component({
  selector: 'todo-item',
  imports: [NgClass],
  templateUrl: './todo-item.component.html',
})
export class TodoItemComponent {
  todo = input<TaskI| undefined>()
  toggle = output<TaskI>()
  delete = output<number>()

  toggleTodo(){
    this.toggle.emit(this.todo()!)
  }

  deleteTodo(){
    this.delete.emit(this.todo()?.id!)  
  }

 }
