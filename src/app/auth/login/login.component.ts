import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  template: `<h3>LOGIN</h3>
  <form [formGroup]="loginForm" (ngSubmit)="login()">
    <div>
        <label for="email">Introduce your email:</label>
        <input type="email" name="email" formControlName="email">
    </div>
    <div>
        <label for="contraseña">Introduce your password:</label>
        <input type="password" name="contraseña" formControlName="contraseña">
    </div>
    <br>
    <button type="submit" [disabled]="loginForm.invalid"> Log in </button>
</form>
<div>If you don't have an account, <button (click)="toRegister()">SIGN UP HERE</button></div>
  `,
  styleUrl: './login.component.scss'
})
export class LoginComponent {
 //authservice: AuthService = inject(AuthService);
 loginForm: FormGroup;
 router: Router = inject(Router);

 constructor(private authService: AuthService) {
   this.loginForm = new FormGroup({
     email: new FormControl("", [Validators.email]),
     contraseña: new FormControl("", [Validators.required])
   })
   //

 }

 login() {
   //console.log(this.loginForm.value);
   //console.log(this.loginForm.value.email);
   this.authService.Login(this.loginForm.value.email, this.loginForm.value.contraseña).subscribe({
    next: (response) => {
      //console.log(response[0].password)
      if(response.length == 0 ) {
        console.log('USUARIO NO EXISTE')
      } else if (response[0].password == this.loginForm.value.contraseña) {
        //storage
        console.log('USUARIO CORRECTO');
        sessionStorage.setItem('loggedId', response[0].id);
        console.log(sessionStorage.getItem('loggedId'))
        this.router.navigate(['/'])

      } else {
        console.log('CONTRASEÑA INCORRECTA')
      }
    }
   })
 }

 toRegister() {
  this.router.navigate(['/auth/register'])
 }

}
