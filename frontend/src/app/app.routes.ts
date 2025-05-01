import { Routes } from '@angular/router';
import { TodosPageComponent } from './todos/pages/todos-page/todos-page.component';

export const routes: Routes = [
  {
    path:"",
    component: TodosPageComponent
  },
  {
    path:"**",
    redirectTo:""
  }
];
