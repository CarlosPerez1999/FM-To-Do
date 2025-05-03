import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { TaskI } from '../interfaces/task.interface';
import { environment } from '../../../environments/environment.development';
import { catchError, Observable, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private http = inject(HttpClient);
  private tasks = signal<TaskI[]>([]);
  readonly tasks$ = this.tasks.asReadonly();

  getTasks(): Observable<TaskI[]> {
    return this.http.get<TaskI[]>(`${environment.apiUrl}/tasks`).pipe(
      tap((tasks) => this.tasks.set(tasks)),
      catchError((error) => {
        return throwError(() => new Error('The tasks could not be obtained'));
      })
    );
  }

  createTask(data: Partial<TaskI>): Observable<TaskI> {
    return this.http.post<TaskI>(`${environment.apiUrl}/tasks`, data).pipe(
      tap((createdTask) =>
        this.tasks.update((currTasks) => [...currTasks, createdTask])
      ),
      catchError((error) => {
        return throwError(() => new Error('The task could not be created'));
      })
    );
  }

  deleteTask(id: number): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}/tasks/${id}`).pipe(
      tap((deletedTask) =>
        this.tasks.update((currTasks) =>
          currTasks.filter((currTask) => currTask.id !== id)
        )
      ),
      catchError((error) => {
        return throwError(() => new Error('The task could not be deleted'));
      })
    );
  }

  updateTask(id: number, data: TaskI): Observable<TaskI> {
    return this.http.put<TaskI>(`${environment.apiUrl}/tasks/${id}`, data).pipe(
      tap((updatedTask) =>
        this.tasks.update((currTasks) =>
          currTasks.map((task) =>
            task.id === updatedTask.id ? updatedTask : task
          )
        )
      ),
      catchError((error) => {
        return throwError(() => new Error('The task could not be updated'));
      })
    );
  }
}
