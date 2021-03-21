import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NgbCalendar} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-add-edit-task',
  templateUrl: './add-edit-task.component.html',
  styleUrls: ['./add-edit-task.component.scss']
})
export class AddEditTaskComponent implements OnInit {

  addTaskForm: FormGroup;
  description: string;
  dueDate: string;
  assignTo: string;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.addTaskForm = this.formBuilder.group({
      description: ['', Validators.required],
      dueDate: ['', Validators.required],
      assignTo: ['', Validators.required]
    })
  }

}
