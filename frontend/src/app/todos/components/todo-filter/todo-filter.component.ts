import { Component, output, signal } from '@angular/core';

@Component({
  selector: 'todo-filter',
  imports: [],
  templateUrl: './todo-filter.component.html',
})
export class TodoFilterComponent { 
  filters = [
    "All",
    "Active",
    "Completed"
  ]
  selectedFilter = signal<string>("All")
  
  filter = output<string>()

  filterData(filter:string){
    this.selectedFilter.set(filter)
    this.filter.emit(this.selectedFilter())
  }

}
