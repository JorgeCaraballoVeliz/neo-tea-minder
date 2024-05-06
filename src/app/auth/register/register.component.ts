import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  template: `<h3>REGISTER</h3>
  <form [formGroup]="registerForm" (ngSubmit)="register()">
    
    <div>
        <label for="name">Introduce your username:</label>
        <input type="text" name="name" formControlName="name">
    </div>
    <div>
        <label for="email">Introduce your email:</label>
        <input type="email" name="email" formControlName="email">
    </div>
    <div>
        <label for="contraseña">Introduce your password:</label>
        <input type="password" name="contraseña" formControlName="contraseña">
    </div>
    <br>
    <button type="submit" [disabled]="registerForm.invalid"> Sign up </button>
</form>
<div>If you already have an account, <button (click)="toLogin()">LOG IN HERE</button></div>
  `,
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  registerForm: FormGroup;
  router: Router = inject(Router);

  constructor(private authService: AuthService) {
    this.registerForm = new FormGroup({
      name: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.email]),
      contraseña: new FormControl("", [Validators.required])
    })
  }

  register() {
    this.authService.Register(this.registerForm.value.name, this.registerForm.value.email, this.registerForm.value.contraseña)
  }

  toLogin() {
    this.router.navigate(['/auth/login'])
  }
}
