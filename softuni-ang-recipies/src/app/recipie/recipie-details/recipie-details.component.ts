import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipiesService } from 'src/app/recipies.service';

@Component({
  selector: 'app-recipie-details',
  templateUrl: './recipie-details.component.html',
  styleUrls: ['./recipie-details.component.css'],
})
export class RecipieDetailsComponent implements OnInit {
  recipie: any | undefined;

  constructor(
    private recipiesService: RecipiesService,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.fetchDetails();
  }

  // fetchDetails(): void {
  //   const id = this.activatedRoute.snapshot.params['id'];
  //   this.recipiesService.getRecipieDetails(id).subscribe((recipie) => {
  //     console.log(recipie);

  //     this.recipie = recipie;
  //   });
  // }

  fetchDetails(): void {
    const name = this.activatedRoute.snapshot.params['name'];

    const recipieArr: any = [];
    this.recipiesService.getRecipies().subscribe((recipie) => {
      recipieArr.push(recipie);

      for (let i = 0; i < recipieArr.length; i++) {
        const currentRecipie = recipieArr[i];

        for (const obj of currentRecipie) {
          if (obj.title == name) {
            this.recipie = obj;
          }
        }
      }
    });
  }
}
