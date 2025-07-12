import { Component, Input } from '@angular/core';

import Swal from 'sweetalert2';
import { ApiService } from '../../../../services/api.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-indianclientlogodrawer',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule // ✅ Add this here
  ],
  templateUrl: './indianclientlogodrawer.component.html',
  styleUrl: './indianclientlogodrawer.component.scss'
})
export class IndianclientlogodrawerComponent {
@Input() drawerVisible: boolean = false;
  @Input() drawerClose: () => void = () => {};

  isLoading = false;
  clientData: any = {
    clientName: '',
    websiteUrl: '',
    logo: null
  };

  selectedImage: File | null = null;
  previewImage: string | null = null;

  constructor(private api: ApiService) {}

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedImage = file;
      const reader = new FileReader();
      reader.onload = () => {
        this.previewImage = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  clearForm(form: any) {
    form.resetForm();
    this.clientData = { clientName: '', websiteUrl: '', logo: null };
    this.previewImage = null;
    this.selectedImage = null;
  }

  save(form: any): void {
    this.isLoading = true;
    const formData = new FormData();
    for (let key in this.clientData) {
      formData.append(key, this.clientData[key]);
    }
    if (this.selectedImage) {
      formData.append('logo', this.selectedImage);
    }

    this.api.postDataApi('api/ClientMaster/upload', formData).subscribe({
      next: () => {
        Swal.fire('Success!', 'Client saved successfully!', 'success');
        this.isLoading = false;
        this.clearForm(form);
        this.drawerClose();
      },
      error: () => {
        Swal.fire('Error!', 'Operation failed!', 'error');
        this.isLoading = false;
      }
    });
  }
}
