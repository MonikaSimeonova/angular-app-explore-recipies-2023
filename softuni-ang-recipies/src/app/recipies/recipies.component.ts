import { Component, OnInit } from '@angular/core';
import { RecipiesService } from '../recipies.service';
import { Recipies } from '../interfaces/recipies';

@Component({
  selector: 'app-recipies',
  templateUrl: './recipies.component.html',
  styleUrls: ['./recipies.component.css'],
})
export class RecipiesComponent implements OnInit {
  recipiesList: Recipies[] = []; 
  isLoading: boolean = true;
  
  constructor(private recipiesService: RecipiesService) {}

  ngOnInit(): void {
    this.recipiesService.getRecipies().subscribe((recipies) => {
      
      this.recipiesList = recipies;
      
      this.recipiesList = Object.values(this.recipiesList);

      this.isLoading = false;
    })
  }
}
