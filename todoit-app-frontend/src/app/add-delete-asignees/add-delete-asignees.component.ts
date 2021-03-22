import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Asignee} from "../models/asignee";

@Component({
  selector: 'app-add-delete-asignees',
  templateUrl: './add-delete-asignees.component.html',
  styleUrls: ['./add-delete-asignees.component.scss']
})
export class AddDeleteAsigneesComponent implements OnInit {
  addAsigneeForm: FormGroup;
  newAsignee : Asignee;
  asigneeName : String;

  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.addAsigneeForm = this.formBuilder.group({
      asigneeName : ['', Validators.required]
    })
  }

  createAsignee() {
    this.newAsignee = new Asignee();
    this.newAsignee.name = this.addAsigneeForm.get("asigneeName").value;
  }

  deleteAsignee() {

  }
}
