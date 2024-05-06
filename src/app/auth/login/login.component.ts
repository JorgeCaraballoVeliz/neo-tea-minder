import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `<h3>LOGIN</h3>
  <form [formGroup]="loginForm" (ngSubmit)="login()">
    <div>
        <label for="email">Introduzca su correo electrónico:</label>
        <input type="email" name="email" formControlName="email">
    </div>
    <div>
        <label for="contraseña">Introduzca su contraseña:</label>
        <input type="password" name="contraseña" formControlName="contraseña">
    </div>
    <br>
    <button type="submit" [disabled]="loginForm.invalid"> Iniciar sesión </button>
</form>
  `,
  styleUrl: './login.component.scss'
})
export class LoginComponent {
 //authservice: AuthService = inject(AuthService);
 loginForm: FormGroup;

 constructor(private authService: AuthService) {
   this.loginForm = new FormGroup({
     email: new FormControl("", [Validators.email]),
     contraseña: new FormControl("", [Validators.required])
   })
   //

 }

 login() {
   console.log(this.loginForm.value);
   //console.log(this.loginForm.value.email);
   this.authService.Login(this.loginForm.value.email, this.loginForm.value.contraseña).subscribe({
    next: (response) => {
      console.log(response)
    }
   })
 }
}
