import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { NxWelcomeComponent } from './nx-welcome.component';

export const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'info', component: NxWelcomeComponent },
];
