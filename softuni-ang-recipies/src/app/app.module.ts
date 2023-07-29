import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import{AngularFireModule} from '@angular/fire/compat'
import{AngularFirestoreModule} from '@angular/fire/compat/firestore'

import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RecipiesComponent } from './recipies/recipies.component';
import { UserModule } from './user/user.module';
import { RecipieModule } from './recipie/recipie.module';
import { environment } from 'src/environments/environment.development';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    RecipiesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    HttpClientModule,
    CoreModule,
    UserModule,
    RecipieModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
