import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  apiUrl = 'https://localhost:44379/task';

  constructor(private http: HttpClient) { }

  getAllTasksByFilter(filter: string):Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl+'/' + filter);
  }

  createNewTask(newTask: Task) {
    this.http.post<Task>(this.apiUrl,newTask);
  }
  editTask(editedTask: Task){
    this.http.put<Task>(this.apiUrl,editedTask);
  }

  updateTaskCompletion(updatedTask: Task) {
    this.http.put<Task>(this.apiUrl,updatedTask);
  }
}
