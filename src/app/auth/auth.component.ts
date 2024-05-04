import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'auth-component',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatCardModule],
  template: `
    <div class="auth-container">
      <mat-card>
        <mat-card-content>
          <router-outlet></router-outlet>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [
    `
      .auth-container {
        padding: 24px;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    `,
  ],
})
export class AuthComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
