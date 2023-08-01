import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RecipiesService } from 'src/app/recipies.service';

@Component({
  selector: 'app-add-recipie',
  templateUrl: './add-recipie.component.html',
  styleUrls: ['./add-recipie.component.css'],
})
export class AddRecipieComponent {
  constructor(
    private fb: FormBuilder,
    private recipiesService: RecipiesService,
    private router: Router
  ) {}

  form = this.fb.group({
    title: ['', Validators.required],
    cook: ['', Validators.required],
    products: ['', Validators.required],
    image: ['', Validators.required],
    time: ['', Validators.required],
  });

  addRecipie() {
    const { title, cook, products, image, time } = this.form.value;
   

    this.recipiesService
      .addRecipie(title!, cook!, products!, image!, time!)
      .subscribe(() => {
        this.router.navigate(['/recipies']);
      });
  }
}
