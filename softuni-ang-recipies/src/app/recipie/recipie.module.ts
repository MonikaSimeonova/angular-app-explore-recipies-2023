import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddRecipieComponent } from './add-recipie/add-recipie.component';
import { RecipieRoutingModule } from './recipie-routing.module';
import { RecipieDetailsComponent } from './recipie-details/recipie-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
  AddRecipieComponent,
  RecipieDetailsComponent,
  EditComponent
  ],
  imports: [
    CommonModule,
    RecipieRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class RecipieModule { }

