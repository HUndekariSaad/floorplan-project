import { Component } from '@angular/core';

import { CommonModule, NgStyle } from '@angular/common';
import { IconDirective } from '@coreui/icons-angular';
import { ContainerComponent, RowComponent, ColComponent, CardGroupComponent, TextColorDirective, CardComponent, CardBodyComponent, FormDirective, InputGroupComponent, InputGroupTextDirective, FormControlDirective, ButtonDirective } from '@coreui/angular';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,ContainerComponent, RowComponent, ColComponent, CardGroupComponent, TextColorDirective, CardComponent, CardBodyComponent, FormDirective, InputGroupComponent, InputGroupTextDirective, IconDirective, FormControlDirective, ButtonDirective, NgStyle],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {


    loginForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      alert('Please enter valid username and password');
      return;
    }

    const loginData = this.loginForm.value;

    this.http.post('http://amkore7-001-site1.ltempurl.com/api/Auth/login', loginData)
      .subscribe({
        next: (response) => {
          console.log('Login successful:', response);
          // TODO: Store token or navigate
        },
        error: (error) => {
          console.error('Login failed:', error);
          alert('Invalid username or password');
        }
      });
  }

}
