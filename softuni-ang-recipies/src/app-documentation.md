*To start the app after installing node_modules, should go to node_modules/@angular/fire/compat/firestore/interfaces.d.ts and add <T> everywhere after firebase (for example: extends firebase.firestore.DocumentSnapshot<T>)

Angular application about recipies.
The functuality of the app includes login, register to the firestore authentication with email and password.

For logged in users: 
- can add new recipies
-can access their profile page, that contains their own recipies, if there are some, else the message is shown "No recipies. You can start by adding".
- can edit and delete their own recipies

For guests:
- can visit home page
- recipies list
- details recipies

For back-end: Firestore realtime database 
For user authentication: Firestore authentication

For better UX I have installed MatSnackBar, that shows short message. 