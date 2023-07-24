import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddRecipieComponent } from './add-recipie/add-recipie.component';
import { RecipieRoutingModule } from './recipie-routing.module';


@NgModule({
  declarations: [
  AddRecipieComponent
  ],
  imports: [
    CommonModule,
    RecipieRoutingModule
  ]
})
export class RecipieModule { }
