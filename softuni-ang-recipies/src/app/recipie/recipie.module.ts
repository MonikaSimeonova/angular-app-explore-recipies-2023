import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddRecipieComponent } from './add-recipie/add-recipie.component';
import { RecipieRoutingModule } from './recipie-routing.module';
import { RecipieDetailsComponent } from './recipie-details/recipie-details.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
  AddRecipieComponent,
  RecipieDetailsComponent
  ],
  imports: [
    CommonModule,
    RecipieRoutingModule,
    ReactiveFormsModule
  ]
})
export class RecipieModule { }

