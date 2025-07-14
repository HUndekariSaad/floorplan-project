import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { ApiService } from '../../../../services/api.service';


@Component({
  selector: 'app-client-drawer',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './client-drawer.component.html',
  styleUrl: './client-drawer.component.scss'
})
export class ClientDrawerComponent {
  @Input() drawerVisible: boolean = false;
  @Input() drawerClose: () => void = () => {};

  clientData: any = {
    clientName: '',
    feedback: '',
    rating: 5,
    clientLocation: ''
  };

  selectedImage: File | null = null;
  previewImage: string | null = null;
  isLoading = false;

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
    this.clientData = {
      clientName: '',
      feedback: '',
      rating: 5,
      clientLocation: ''
    };
    this.selectedImage = null;
    this.previewImage = null;
  }

  save(form: any): void {
    this.isLoading = true;
    const formData = new FormData();
    for (let key in this.clientData) {
      formData.append(key, this.clientData[key]);
    }
    if (this.selectedImage) {
      formData.append('clientImage', this.selectedImage);
    }

    this.api.postDataApi('api/ClientReview', formData).subscribe({
      next: () => {
        Swal.fire('Success', 'Client Review saved successfully!', 'success');
        this.clearForm(form);
        this.drawerClose();
        this.isLoading = false;
      },
      error: () => {
        Swal.fire('Error', 'Failed to save client review.', 'error');
        this.isLoading = false;
      }
    });
  }
}
