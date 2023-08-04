import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipiesService } from 'src/app/recipies.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  //check later
  currentRecipie: any;
  form: any;
  recipieId: string = '';

  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private recipieService: RecipiesService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.recipieId = this.activatedRoute.snapshot.params['id'];
    this.recipieService.getRecipie(this.recipieId).subscribe((recipie) => {
      this.currentRecipie = recipie;
      console.log();
      

      this.form = this.fb.group({
        title: [this.currentRecipie.title, Validators.required],
        cook: [this.currentRecipie.cook, Validators.required],
        products: [this.currentRecipie.products, Validators.required],
        image: [this.currentRecipie.image, Validators.required],
        time: [this.currentRecipie.time, Validators.required],
      });
    });
  }

  editRecipie() {
    const { title, cook, products, image, time } = this.form.value;
    try {
      this.recipieService.updateRecipie(
        this.recipieId,
        title,
        cook,
        products,
        image,
        time
      );
      this.router.navigate(['/recipies']);
      this.snackBar.open('Updated Succesfully', 'OK', {duration:3000})
      
    } catch (error) {
      this.snackBar.open('Please try again', 'OK', {duration:3000})
    }
  }
}
