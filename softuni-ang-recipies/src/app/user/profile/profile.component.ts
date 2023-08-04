import { Component, OnInit } from '@angular/core';
import { User } from '@angular/fire/auth';
import { RecipiesService } from 'src/app/recipies.service';
import { USER_KEY } from 'src/app/shared/validators/constants';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  user: User | undefined;
  uid: string = '';
  userEmail: string = '';
  ownerArr: any = [];

  constructor(private recipiesService: RecipiesService) {}

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem(USER_KEY)!);
    console.log(this.user?.uid);

    if (this.user) {
      this.uid = this.user?.uid;
      this.userEmail = this.user?.email!;
    }

    this.recipiesService.getRecipies().subscribe((recipies) => {
      const recipiesOwner = Object.values(recipies).map((recipie) => {
        if (recipie.owner == this.uid) {
          this.ownerArr.push(recipie);
        }
      });
      console.log(this.ownerArr);
    });
  }
}
