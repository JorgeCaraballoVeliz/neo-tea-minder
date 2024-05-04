import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { APP_ROUTES } from './app/app.routes';
// import { CustomHttpInterceptor } from './app/interceptors/custom-http.interceptor';
import { provideAnimations } from '@angular/platform-browser/animations';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(APP_ROUTES),
    // provideHttpClient(withInterceptors([CustomHttpInterceptor])),
    provideAnimations(),
  ],
});
