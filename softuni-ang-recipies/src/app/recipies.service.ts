import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipies } from './interfaces/recipies';

@Injectable({
  providedIn: 'root',
})
export class RecipiesService {
  constructor(private http: HttpClient) {}

  getRecipies() {
    //interface add
    const url =
      'https://softuni-angular-recipies-default-rtdb.firebaseio.com/recipies.json';
    return this.http.get<Recipies[]>(url);
  }
  getRecipieDetails(id: string) {
    const url = `https://softuni-angular-recipies-default-rtdb.firebaseio.com/recipies/${id}.json`;
    return this.http.get<Recipies[]>(url);
  }

  addRecipie(
    title: string,
    cook: string,
    products: string,
    image: string,
    time: string
  ) {
    const url =
      'https://softuni-angular-recipies-default-rtdb.firebaseio.com/recipies.json';
    return this.http.post(url, { title, cook, products, image, time });
  }
}
