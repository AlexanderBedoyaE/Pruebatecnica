import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Registrosp2Component } from './registrosp2/registrosp2.component';

const routes: Routes = [
  {
    path:'registrosp2/:variable',
    component:Registrosp2Component
  }
  // {path:'registrop2/:id',component:Registrosp2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
