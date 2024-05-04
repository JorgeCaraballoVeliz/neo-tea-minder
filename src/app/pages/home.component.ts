import { CommonModule, Location } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterModule,
} from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { filter, map } from 'rxjs';

@Component({
  selector: 'home-component',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    RouterModule,
    MatToolbarModule,
    MatIconModule,
  ],
  template: `
    <mat-toolbar color="primary">
      <button *ngIf="canBack" mat-icon-button [routerLink]="['/teas']">
        <mat-icon>arrow_back</mat-icon>
      </button>
      <span>Tea Minder</span>
      <span class="spacer"></span>

      <button mat-icon-button>
        <mat-icon>logout</mat-icon>
      </button>
    </mat-toolbar>
    <div class="global-container">
      <mat-card>
        <mat-card-content>
          <router-outlet></router-outlet>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [
    `
      .global-container {
        height: 100%;
        padding: 12px;
      }

      .spacer {
        flex: 1 1 auto;
      }
    `,
  ],
})
export class HomeComponent implements OnInit {
  location: Location = inject(Location);
  router: Router = inject(Router);
  canBack = false;

  constructor() {
    this.router.events
      .pipe(
        filter((e) => e instanceof NavigationEnd),
        map((m) => m as NavigationEnd)
      )
      .subscribe((response: NavigationEnd) => {
        this.canBack = response.url !== '/teas' && response.url !== '/';
      });
  }

  ngOnInit() {}
}
