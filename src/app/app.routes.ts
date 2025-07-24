import { Route } from '@angular/router';

import { About } from './pages/about/about';
import { Home } from './pages/home/home';
import { Services } from './pages/services/services';
import { ContactPage } from './pages/contact/contact';
import { NotFound } from './pages/not-found/not-found';

export const routes: Route[] = [
  { path: '',   redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'about', component: About },
  { path: 'services', component: Services },
  { path: 'contact', component: ContactPage },
 { path: '**', component: NotFound }
];
