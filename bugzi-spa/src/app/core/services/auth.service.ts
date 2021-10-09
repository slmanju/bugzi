import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  public authenticatedSubject = new BehaviorSubject<boolean>(false);

  constructor(private router: Router) {
  }

  async checkAuthenticated(): Promise<boolean> {
    const authenticated = true;
    this.authenticatedSubject.next(authenticated);
    return authenticated;
  }

  async login(username: string, password: string): Promise<void> {
    this.authenticatedSubject.next(true);
  }

  async logout(redirect: string): Promise<void> {
    try {
      this.authenticatedSubject.next(false);
      await this.router.navigate([redirect]);
    } catch (err) {
      console.error(err);
    }
  }
}