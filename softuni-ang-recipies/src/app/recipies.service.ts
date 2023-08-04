import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipies } from './interfaces/recipies';
import { dbUrl } from './shared/validators/constants';
import { Database, set, ref, update } from '@angular/fire/database';

@Injectable({
  providedIn: 'root',
})
export class RecipiesService {
  constructor(private http: HttpClient, public database: Database) {}

  getRecipies() {
    return this.http.get<Recipies[]>(dbUrl);
  }
  getRecipie(id: string) {
    const url = `https://softuni-angular-recipies-default-rtdb.firebaseio.com/recipies/${id}.json`;
    return this.http.get(url);
  }

  createRecipie(
    title: string,
    cook: string,
    products: string,
    image: string,
    time: string,
    owner: string,
    id: number
  ) {
    set(ref(this.database, 'recipies/' + id), {
      title,
      cook,
      products,
      image,
      time,
      owner: owner,
      id: id
    });
  }

  updateRecipie(
    id: string,
    title: string,
    cook: string,
    products: string,
    image: string,
    time: string
  ) {
    update(ref(this.database, 'recipies/' + id), {
      title,
      cook,
      products,
      image,
      time,
    });
  }
}
