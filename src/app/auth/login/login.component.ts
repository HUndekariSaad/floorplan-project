// import { Component } from '@angular/core';

// import { CommonModule, NgStyle } from '@angular/common';
// import { IconDirective } from '@coreui/icons-angular';
// import { ContainerComponent, RowComponent, ColComponent, CardGroupComponent, TextColorDirective, CardComponent, CardBodyComponent, FormDirective, InputGroupComponent, InputGroupTextDirective, FormControlDirective, ButtonDirective } from '@coreui/angular';
// import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
// import { HttpClient } from '@angular/common/http';
// import { switchAll } from 'rxjs';
// import { ApiService } from '../../services/api.service';
// import Swal from 'sweetalert2'
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-login',
//   imports: [ReactiveFormsModule,ContainerComponent, RowComponent, ColComponent, CardGroupComponent, TextColorDirective, CardComponent, CardBodyComponent, FormDirective, InputGroupComponent, InputGroupTextDirective, IconDirective, FormControlDirective, ButtonDirective, NgStyle],
//   templateUrl: './login.component.html',
//   styleUrl: './login.component.scss'
// })
// export class LoginComponent {


//     loginForm: FormGroup;

//   constructor(private api: ApiService,private fb: FormBuilder, private http: HttpClient,private router: Router) {
//     this.loginForm = this.fb.group({
//       username: ['', Validators.required],
//       password: ['', Validators.required]
//     });
//   }



//   onSubmit() {
//    if (this.loginForm.invalid) {
//       alert('Please enter valid username and password');
//       return;
//     }


//   const credentials = this.loginForm.value;

//   this.api.postDataApi('api/Auth/login', credentials).subscribe({
//     next: (res: any) => {
//      Swal.fire('Success!', 'Login Successful', 'success');
//       // this.isLoading = false;

//       // ✅ Optionally store token
//       if (res.token) {
//         sessionStorage.setItem('auth_token', res.token.result);
//       }

//       this.loginForm.reset();

//       // 🔐 Redirect to dashboard or home
//       this.router.navigate(['/dashboard']);
//     },
//     error: (err) => {
//       const errorMessage = err?.error?.message || err?.message || 'Login failed';
//       // Swal.fire('Error!', errorMessage, 'error');
//       // this.isLoading = false;
//     }
//   });
// }
// }
import { Component } from '@angular/core';
import { CommonModule, NgStyle } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import Swal from 'sweetalert2';
import { IconDirective } from '@coreui/icons-angular';
import {
  ContainerComponent,
  RowComponent,
  ColComponent,
  CardGroupComponent,
  TextColorDirective,
  CardComponent,
  CardBodyComponent,
  FormDirective,
  InputGroupComponent,
  InputGroupTextDirective,
  FormControlDirective,
  ButtonDirective
} from '@coreui/angular';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    ContainerComponent, RowComponent, ColComponent, CardGroupComponent, TextColorDirective,
    CardComponent, CardBodyComponent, FormDirective, InputGroupComponent,
    InputGroupTextDirective, IconDirective, FormControlDirective, ButtonDirective, NgStyle
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      Swal.fire('Warning!', 'Please enter valid username and password', 'warning');
      return;
    }

    const credentials = this.loginForm.value;

    this.api.postDataApi('api/Auth/login', credentials).subscribe({
      next: (res: any) => {
        // ✅ Store the token (adjust key based on your response structure)
        const token = res?.token?.result || res?.token || res?.result;
        if (token) {
          sessionStorage.setItem('token', token); // Match this key in AuthGuard
          Swal.fire('Success!', 'Login Successful', 'success');
          this.router.navigate(['/dashboard']);
          this.loginForm.reset();
        } else {
          Swal.fire('Error!', 'Token not found in response!', 'error');
        }
      },
      error: (err) => {
        const errorMessage = err?.error?.message || 'Login failed. Please try again.';
        Swal.fire('Error!', errorMessage, 'error');
      }
    });
  }
}
