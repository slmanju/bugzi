import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from './core/store/store.state';
import { selectAuthenticated } from './core/store/selector/auth.selector';
import { logout } from './core/store/action/auth.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  
  title = 'Bugzi';
  auth$: Observable<boolean>;

  constructor(private store: Store<AppState>, private router: Router) {
  }

  ngOnInit() {
    this.auth$ = this.store.select(selectAuthenticated);
  }

  onLogout() {
    this.store.dispatch(logout());
    this.router.navigate(['/login']);
  }
}
