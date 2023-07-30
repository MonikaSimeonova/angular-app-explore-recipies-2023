import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRecipieComponent } from './add-recipie/add-recipie.component';
import { RecipiesComponent } from '../recipies/recipies.component';
import { RecipieDetailsComponent } from './recipie-details/recipie-details.component';
import { AuthCanActivate } from '../core/guards/can.activate';

const routes: Routes = [
  {
    path: 'recipie', children: [
      {
        path: '', pathMatch: 'full',
        component: RecipiesComponent
      },
      {
        path: ':name',
        component: RecipieDetailsComponent
      }
    ]
  },
  {path: 'add', component: AddRecipieComponent, canActivate: [AuthCanActivate]},
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipieRoutingModule { 

}
