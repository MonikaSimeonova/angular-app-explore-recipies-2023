import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRecipieComponent } from './add-recipie/add-recipie.component';

const routes: Routes = [
  {path: 'add', component: AddRecipieComponent},
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipieRoutingModule { 

}
