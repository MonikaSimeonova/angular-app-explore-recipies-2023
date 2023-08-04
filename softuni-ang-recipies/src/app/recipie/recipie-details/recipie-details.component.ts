import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipiesService } from 'src/app/recipies.service';

@Component({
  selector: 'app-recipie-details',
  templateUrl: './recipie-details.component.html',
  styleUrls: ['./recipie-details.component.css'],
})
export class RecipieDetailsComponent implements OnInit {
  recipie: any;

  constructor(
    private recipiesService: RecipiesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.fetchDetails();
  }

  fetchDetails(): void {
    const id = this.activatedRoute.snapshot.params['id'];

    this.recipiesService.getRecipie(id).subscribe((recipie) => {
      this.recipie = recipie;
      console.log(this.recipie);
    });
  }

  onDelete(id: string) {
    const conformation = confirm(
      'Are you sure you want to delete that recipie?'
    );
    if (conformation) {
      this.recipiesService.removeRecipie(id);
      this.router.navigate(['/recipies']);
    }
  }
}
