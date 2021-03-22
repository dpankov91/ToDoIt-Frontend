import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TodolistComponent} from './todolist/todolist.component';

import {AddDeleteAsigneesComponent} from "./add-delete-asignees/add-delete-asignees.component";


const routes: Routes = [
  {path: '', component: TodolistComponent},
  {path: 'adddeleteasignees', component: AddDeleteAsigneesComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
