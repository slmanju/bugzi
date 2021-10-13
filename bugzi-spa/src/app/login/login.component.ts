import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { login } from '../core/store/action/auth.action';
import { AppState, AuthState } from '../core/store/store.state';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  
  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>,
    private router: Router
  ) {
    this.form = this.fb.group({
      username: ['', Validators.email],
      password: ['', Validators.required],
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.form.valid) {
      this.store.dispatch(login({
        user: this.form.value.username
      }));

    this.router.navigate(['/board']);
    }
  }
}
