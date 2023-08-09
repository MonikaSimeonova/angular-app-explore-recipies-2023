import { Component, OnInit } from '@angular/core';
import { User } from '@angular/fire/auth';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipies } from 'src/app/interfaces/recipies';
import { RecipiesService } from 'src/app/recipies.service';
import { USER_KEY } from 'src/app/shared/constants';

@Component({
  selector: 'app-recipie-details',
  templateUrl: './recipie-details.component.html',
  styleUrls: ['./recipie-details.component.css'],
})
export class RecipieDetailsComponent implements OnInit {
  recipie: Recipies | undefined;
  user: User | undefined;
  ownerId: string = '';
  isOwner: boolean = false;
  recipieOwner: string | undefined;
  

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

      this.recipieOwner = this.recipie.owner;
      this.user = JSON.parse(sessionStorage.getItem(USER_KEY)!);

      if (this.user) {
        this.ownerId = this.user?.uid;

        if (this.ownerId === this.recipieOwner) {
          this.isOwner = true;
          //this.recipiesService.isOwner(true);
        }
      }
    });
    
  }

  onDelete(id?: any) {
    const confirmation = confirm(
      'Are you sure you want to delete that recipie?'
    );
    if (confirmation) {
      this.recipiesService.removeRecipie(id);
      this.router.navigate(['/recipies']);
    }
  }
}
