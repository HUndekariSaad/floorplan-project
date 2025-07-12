import { Component } from '@angular/core';

import { CommonModule, NgStyle } from '@angular/common';
import { IconDirective } from '@coreui/icons-angular';
import { ContainerComponent, RowComponent, ColComponent, CardGroupComponent, TextColorDirective, CardComponent, CardBodyComponent, FormDirective, InputGroupComponent, InputGroupTextDirective, FormControlDirective, ButtonDirective } from '@coreui/angular';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { switchAll } from 'rxjs';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,ContainerComponent, RowComponent, ColComponent, CardGroupComponent, TextColorDirective, CardComponent, CardBodyComponent, FormDirective, InputGroupComponent, InputGroupTextDirective, IconDirective, FormControlDirective, ButtonDirective, NgStyle],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {


    loginForm: FormGroup;

  constructor(private api: ApiService,private fb: FormBuilder, private http: HttpClient) {
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


  const credentials = this.loginForm.value;

  this.api.postDataApi('api/Auth/login', credentials).subscribe({
    next: (res: any) => {
      // switchAll.fire('Success!', 'Login Successful', 'success');
      // this.isLoading = false;

      // ✅ Optionally store token
      if (res.token) {
        localStorage.setItem('auth_token', res.token);
      }

      this.loginForm.reset();

      // 🔐 Redirect to dashboard or home
      // this.router.navigate(['/dashboard']);
    },
    error: (err) => {
      const errorMessage = err?.error?.message || err?.message || 'Login failed';
      // Swal.fire('Error!', errorMessage, 'error');
      // this.isLoading = false;
    }
  });
}
}
