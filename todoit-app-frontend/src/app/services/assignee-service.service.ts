import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Asignee} from "../models/asignee";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class AssigneeServiceService {

  apiUrl = 'https://localhost:44379/assignee';

  constructor(private http: HttpClient) {
  }

  //CRUD

  //Create new assignee by name
  createAssigneeByName(name: string) {
    return this.http.post<string>(this.apiUrl, name).subscribe()
  }

  /*//Get assignee by id
  getAllAssigneesById(id: number) {
    return this.http.get<Asignee>(this.apiUrl + '/' + id);
  }*/

  //Get all assignees
  getAllAssignees(): Observable<Asignee[]> {
    return this.http.get<Asignee[]>(this.apiUrl);
  }

  //Delete assignee by id
  deleteAssigneeById(id: number) {
    return this.http.delete<Asignee>(this.apiUrl + '/' + id).subscribe();
  }

}
