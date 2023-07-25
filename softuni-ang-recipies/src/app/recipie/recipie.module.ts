import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddRecipieComponent } from './add-recipie/add-recipie.component';
import { RecipieRoutingModule } from './recipie-routing.module';
import { RecipieDetailsComponent } from './recipie-details/recipie-details.component';


@NgModule({
  declarations: [
  AddRecipieComponent,
  RecipieDetailsComponent
  ],
  imports: [
    CommonModule,
    RecipieRoutingModule
  ]
})
export class RecipieModule { }
