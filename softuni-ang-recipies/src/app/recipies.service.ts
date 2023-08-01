import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipies } from './interfaces/recipies';
import { dbUrl } from './shared/validators/constants';

@Injectable({
  providedIn: 'root',
})
export class RecipiesService {
  constructor(private http: HttpClient) {}

  getRecipies() {
    return this.http.get<Recipies[]>(dbUrl);
  }
  // getRecipieDetails(id: string) {
  //   const url = `https://softuni-angular-recipies-default-rtdb.firebaseio.com/recipies/${id}.json`;
  //   return this.http.get<Recipies[]>(url);
  // }

  addRecipie(
    title: string,
    cook: string,
    products: string,
    image: string,
    time: string
  ) {
    return this.http.post(dbUrl, { title, cook, products, image, time });
  }
}
