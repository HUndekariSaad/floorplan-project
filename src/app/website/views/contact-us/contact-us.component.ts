import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import Swal from 'sweetalert2';
import { ApiService } from '../../../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-us',
  imports: [RouterModule, ReactiveFormsModule,CommonModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {
  contactForm: FormGroup;
  servicesList: string[] = [
    'Epoxy Flooring',
    'PU Coating',
    'Self-leveling Screed',
    'Tile Protection',
    'All Wall Coatings',
    'Under Water Coating'
  ];


  constructor(private fb: FormBuilder, private http: HttpClient, private api: ApiService,) {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      service: this.fb.array([], Validators.required),
      message: ['', Validators.required]
    });


  }

  onSubmit() {
    if (this.contactForm.invalid) {
      Swal.fire('Error', 'Please fill all required fields correctly.', 'error');
      return;
    }

    this.api.postDataApi('api/ContactUs/create', this.contactForm.value).subscribe({
      next: () => {
        Swal.fire('Success', 'Message sent successfully!', 'success');
        this.contactForm.reset();
      },
      error: (err) => {
        const message = err?.error?.message || 'Something went wrong.';
        Swal.fire('Error', message, 'error');
      }
    });
  }

onCheckboxChange(event: any) {
  const serviceArray: FormArray = this.contactForm.get('service') as FormArray;

  if (event.target.checked) {
    serviceArray.push(this.fb.control(event.target.value));
  } else {
    const index = serviceArray.controls.findIndex(x => x.value === event.target.value);
    if (index >= 0) serviceArray.removeAt(index);
  }
}

  getServiceId(service: string): string {
    return service.replace(/ /g, '-');
  }
}
