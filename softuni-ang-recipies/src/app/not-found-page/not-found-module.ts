import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundPageComponent } from './not-found-page.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '**', redirectTo: '404', pathMatch: 'full'},
{ path: '404', component: NotFoundPageComponent }];

  // { path: '**', pathMatch: 'full', component: NotFoundPageComponent },
//{ path: '404', component: NotFoundPageComponent },

@NgModule({
  declarations: [NotFoundPageComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotFoundPageModule {}
