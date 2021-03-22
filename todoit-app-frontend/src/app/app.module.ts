import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodolistComponent } from './todolist/todolist.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {ReactiveFormsModule} from "@angular/forms";
import { AddDeleteAsigneesComponent } from './add-delete-asignees/add-delete-asignees.component';


@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    AddDeleteAsigneesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
