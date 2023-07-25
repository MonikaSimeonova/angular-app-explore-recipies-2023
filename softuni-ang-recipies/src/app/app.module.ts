import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RecipiesComponent } from './recipies/recipies.component';
import { UserModule } from './user/user.module';
import { RecipieModule } from './recipie/recipie.module';

@NgModule({
  declarations: [
    AppComponent,
    RecipiesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    UserModule,
    RecipieModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
