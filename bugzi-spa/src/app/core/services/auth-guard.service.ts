import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../store/store.state';

import { map } from 'rxjs/operators';
import { selectAuthenticated } from '../store/selector/auth.selector';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  
  constructor(private store: Store<AppState>, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.store.select(selectAuthenticated)
      .pipe(
        map(auth => {
          if (auth) {
            return true;
          } else {
            this.router.navigate(['/login']);
            return false;
          }
        })
    );
  }

}
