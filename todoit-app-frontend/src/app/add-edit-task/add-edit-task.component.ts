import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Task} from "../models/task";

@Component({
  selector: 'app-add-edit-task',
  templateUrl: './add-edit-task.component.html',
  styleUrls: ['./add-edit-task.component.scss']
})
export class AddEditTaskComponent implements OnInit {

  addTaskForm: FormGroup;
  newTask: Task;
  description: String;
  dueDate: string;
  user: string;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.addTaskForm = this.formBuilder.group({
      description: ['', Validators.required],
      dueDate: ['', Validators.required],
      assignee: ['', Validators.required]
    })
  }

  saveChanges() {
    this.newTask = new Task();
    this.newTask.description = this.addTaskForm.get('description').value;
    this.newTask.dueDate = this.addTaskForm.get('dueDate').value;
   // this.newTask.assignedId = this.addTaskForm.get('user').value;
  }

  cancel() {
    this.addTaskForm.reset();
  }
}
