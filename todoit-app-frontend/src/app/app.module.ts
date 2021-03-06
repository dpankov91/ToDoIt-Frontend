import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodolistComponent } from './todolist/todolist.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddEditTaskComponent } from './add-edit-task/add-edit-task.component';
import {ReactiveFormsModule} from "@angular/forms";
import {FormsModule} from "@angular/forms";

import { AddDeleteAsigneesComponent } from './add-delete-asignees/add-delete-asignees.component';
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    AddDeleteAsigneesComponent,
    AddEditTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
