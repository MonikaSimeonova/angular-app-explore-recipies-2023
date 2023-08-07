import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RecipiesService } from 'src/app/recipies.service';
import { Database, set, ref, update } from '@angular/fire/database';
import { USER_KEY } from 'src/app/shared/validators/constants';
import { User } from '@angular/fire/auth';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-recipie',
  templateUrl: './add-recipie.component.html',
  styleUrls: ['./add-recipie.component.css'],
})
export class AddRecipieComponent implements OnInit {
  user: User | undefined;
  uid: string = '';

  constructor(
    private fb: FormBuilder,
    private recipiesService: RecipiesService,
    private router: Router,
    public database: Database,
    public snackBar: MatSnackBar
  ) {}

  form = this.fb.group({
    title: ['', Validators.required],
    cook: ['', Validators.required],
    products: ['', Validators.required],
    image: ['', Validators.required],
    time: ['', Validators.required],
  });

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem(USER_KEY)!);
    console.log(this.user?.uid);

    if (this.user) {
      this.uid = this.user?.uid;
    }
  }

  addRecipie() {
    const { title, cook, products, image, time } = this.form.value;
    const id = Date.now();
    try {
      set(ref(this.database, 'recipies/' + id), {
        title,
        cook,
        products,
        image,
        time,
        owner: this.uid,
        id: id,
      }).then(() => {
        this.snackBar.open(
          `Succesfully created new Recipie ${title}`,
          'Great',
          {
            duration: 3000,
          }
        );
        this.router.navigate(['/recipies']);
      });
    } catch (error) {
      this.snackBar.open(`Please try again to add your recipie`, 'OK', {
        duration: 4000,
      });
    }
  }
}
