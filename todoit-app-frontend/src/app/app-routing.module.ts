import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TodolistComponent} from './todolist/todolist.component';
import {AddEditTaskComponent} from "./add-edit-task/add-edit-task.component";
import {AddDeleteAsigneesComponent} from "./add-delete-asignees/add-delete-asignees.component";


const routes: Routes = [
  {path: '', component: TodolistComponent},
  {path: 'adddeleteasignees', component: AddDeleteAsigneesComponent},
  {path: 'addedittask', component: AddEditTaskComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
