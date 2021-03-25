import {Component, OnInit} from '@angular/core';
import {Task} from "../models/task";
import {Form, FormBuilder, FormControl, Validators} from "@angular/forms";
import {AssigneeService} from "../services/assignee.service";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {

  searchForm: FormControl;
  mySearch: string;

  constructor(private taskService: AssigneeService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    // this.updateTable(this.taskService.getAllTasks())

    this.searchForm = this.formBuilder.control({
      mySearch: ['', Validators.required]
    })
  }

  search() {
    // this.updateTable(this.taskService.getAllTasksByFilter(userInput: string));
  }

  updateTable(taskList: Task[]) {
    //TODO update table in .html using the list of tasks received
  }
}
