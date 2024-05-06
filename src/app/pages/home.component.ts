import { CommonModule, Location } from '@angular/common';
import { Component, Input, OnInit, inject } from '@angular/core';
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
import { GetTeaService, UserInfoResponse, UserInfoResponse2 } from '../services/get-tea.service';
import { HttpClient } from '@angular/common/http';

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
      <span>Tea Minder WELCOME: {{ user }}</span>
      <span class="spacer"></span>

      <button mat-icon-button (click)="logout()">
        <mat-icon >logout</mat-icon>
      </button>
    </mat-toolbar>
    <div>
      <button>CREAR</button>
    </div>
    <div class="global-container">
      <mat-card *ngFor="let item of data">
        <mat-card-content >
        <span>{{ item.name }}</span>
        <br>
        <span>{{ item.description }}</span>
        <div>
          <button>BORRAR</button>
          <button>ACTUALIZAR(meter form)</button>
        </div>
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
//
  private teaService: GetTeaService = inject(GetTeaService);
  private httpClient = inject(HttpClient);
  //outputTea!: string;
  user!: string;
  @Input() data: UserInfoResponse[] = []

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

  ngOnInit(): void {
    const loggedId = sessionStorage.getItem('loggedId');
    if(loggedId) {
      //console.log(sessionStorage.getItem('loggedId'))
    
      this.teaService.getUserInfo(loggedId).subscribe({
        next: (response) => {
          console.log(response);
          this.user = response.name;
          //
          this.teaService.getTeaInfo(response.id).subscribe({
            next: (response2) => {
              console.log(response2)
              this.data = response2;
            }
          })
          //this.outputTea = response.userId;
          //response2[3].name
          
        }
      })
    }
    
    // //console log teas
    // this.httpClient.get('http://localhost:3000/teas').subscribe({
    //   next: (response) => {
    //     console.log('TEAS: ');
    //     console.log(response);
    //   }
    // })
    // //console log users
    // this.httpClient.get('http://localhost:3000/users').subscribe({
    //   next: (response) => {
    //     console.log('USERS: ');
    //     console.log(response);
    //   }
    // })
  }

  logout() {
    sessionStorage.removeItem('loggedId');
    console.log('SESION CERRADA');
    this.router.navigate(['/auth/login'])
  }
}
