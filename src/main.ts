
import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { AppRoutingModule } from './app/app-routing.module';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import {provideRouter, Routes} from "@angular/router";

const routes: Routes = [
  {
    path:'admin',
    loadChildren: () => import('./app/routes/admin-routes').then(m => m.ADMIN_ROUTES)
  },
  {
    path:'',
    loadChildren: () => import('./app/routes/customers-routes')
  }
];

bootstrapApplication(AppComponent, {
    providers: [importProvidersFrom(BrowserModule, AppRoutingModule), provideRouter(routes)]
})
  .catch(err => console.error(err));
