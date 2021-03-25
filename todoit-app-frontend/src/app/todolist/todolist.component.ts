import {Component, OnInit} from '@angular/core';
import {Task} from "../models/task";
import {Form, FormBuilder, FormControl, Validators} from "@angular/forms";
import {AssigneeService} from "../services/assignee.service";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";
import {TaskService} from "../services/task.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {

  searchForm: FormControl;
  mySearch: string;
  taskLst: Task[];

  constructor(private taskService: TaskService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.searchForm = this.formBuilder.control({
      mySearch: ['', Validators.required]
    })
    this.taskService.getAllTasksByFilter(null).subscribe(listOfTasks => {this.taskLst = listOfTasks;});
     this.updateTable(this.taskLst)
  }

  search() {
    this.taskService.getAllTasksByFilter(this.mySearch).subscribe(listOfTasks => {this.taskLst = listOfTasks;})
     this.updateTable(this.taskLst);
  }

  updateTable(taskList: Task[]) {
    //TODO update table in .html using the list of tasks received
  }
}
