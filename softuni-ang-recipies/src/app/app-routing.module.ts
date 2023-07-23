
import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipiesComponent } from './recipies/recipies.component';
import { HomeComponent } from './core/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'recipies', component: RecipiesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
