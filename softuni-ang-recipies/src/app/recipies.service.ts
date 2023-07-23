import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipiesService  {

  constructor(private http: HttpClient){}


  getRecipies() {
    //interface add
    const url = 'https://softuni-angular-recipies-default-rtdb.firebaseio.com/recipies.json'
    return this.http.get(url)
  }
}

