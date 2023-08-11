\*To start the app after installing node_modules, should go to node_modules/@angular/fire/compat/firestore/interfaces.d.ts and add <T> everywhere after firebase (for example: extends firebase.firestore.DocumentSnapshot<T>)

Angular application about recipes.
The functionality of the app includes login, register to the firestore authentication with email and password.

For logged in users:

- can add new recipes
-can access their profile page, that contains their own recipes, if there are some, else the message is shown "No recipes. You can start by adding".
- can edit and delete their own recipes

For guests:

- can visit home page
- recipes list
- details recipes

For back-end: Firestore realtime database
For user authentication: Firestore authentication

For better UX I have installed MatSnackBar, that shows short message and css loader of the list of recipes.

The application is deployed using firebase deploy, click -> : https://softuni-angular-recipies.web.app/home