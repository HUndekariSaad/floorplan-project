import { Component, Input } from '@angular/core';
import Swal from 'sweetalert2';
import { ApiService } from '../../../../services/api.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-indianclientdrawer',
  imports: [CommonModule, FormsModule],
  templateUrl: './indianclientdrawer.component.html',
  styleUrl: './indianclientdrawer.component.scss'
})
export class IndianclientdrawerComponent {
  @Input() drawerVisible: boolean = false;
  @Input() drawerClose: () => void = () => {};
  apiKey: string = 'api/ClientMaster';
  isLoading = false;

  clientData: any = {
    fullName: '',
    phoneNumber: '',
    email: '',
    companyName: '',
    gstNumber: '',
    state: '',
    city: '',
    pincode: '',
    clientType: '',
    addressLine: ''
  };

  textFields = [
    { name: 'fullName', label: 'Full Name' },
    { name: 'phoneNumber', label: 'Phone Number' },
    { name: 'email', label: 'Email' },
    { name: 'companyName', label: 'Company Name' },
    { name: 'gstNumber', label: 'GST Number' },
    { name: 'state', label: 'State' },
    { name: 'city', label: 'City' },
    { name: 'pincode', label: 'Pincode' },
    { name: 'clientType', label: 'Client Type' }
  ];

  constructor(private api: ApiService) {}

  clearForm(form: any) {
    form.resetForm();
    this.clientData = {
      fullName: '',
      phoneNumber: '',
      email: '',
      companyName: '',
      gstNumber: '',
      state: '',
      city: '',
      pincode: '',
      clientType: '',
      addressLine: ''
    };
  }

  save(form: any): void {
    this.isLoading = true;

    const formData = new FormData();
    for (let key in this.clientData) {
      formData.append(key, this.clientData[key]);
    }

    this.api.postDataApi(this.apiKey, formData).subscribe({
      next: () => {
        Swal.fire('Success!', 'Client Data Saved Successfully', 'success');
        this.isLoading = false;
        this.clearForm(form);
      },
      error: (err) => {
        Swal.fire('Error!', err?.error?.message || 'Save Failed', 'error');
        this.isLoading = false;
      }
    });
  }
}
