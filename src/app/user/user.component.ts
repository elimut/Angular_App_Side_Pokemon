// import { Component } from '@angular/core';
// import { User } from './user';

// @Component({
//   selector: 'app-user',
//   template: `
//     <div class='row'>
//     <div class="col s12 m4 offset-m4">
//     <div class="card hoverable">
//       <div class="card-content center">
//         <span class="card-title">Create user</span>
//         <p><em>{{ message }}</em></p>
//       </div>
//             <form #loginForm="ngForm">
//           <div>
//                     <label for="name">Name</label>
//             <input type="text" id="name" [(ngModel)]="username" name="name" required>
//           </div>
//           <div>
//             <label for="password">Password</label>
//             <input type="password" id="password" [(ngModel)]="password" name="password" required>
//           </div>
//         </form>
//       <div class="card-action center">
//         <a (click)="login()" class="waves-effect waves-light btn"  *ngIf="!authService.isLoggedIn">Se connecter</a>
//         <a (click)="logout()" *ngIf="authService.isLoggedIn">Se déconnecter</a>
//       </div>
//     </div>
//     </div>
//     </div>
// })
// export class UserComponent {

//   user: User;

//   ngOnInit(): void {
//     this.user = new User();
//   }

// }
