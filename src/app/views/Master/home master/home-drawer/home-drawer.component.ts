import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
import { ApiService } from '../../../../services/api.service';

@Component({
  selector: 'app-home-drawer',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home-drawer.component.html',
  styleUrl: './home-drawer.component.scss'
})
export class HomeDrawerComponent {
  @Input() drawerVisible: boolean = false;
  @Input() drawerClose: () => void = () => { };
  apiKey: string = 'api/HomeMaster';
  HomeList: any = [];
  isLoading = false;
  homeData: any = {
    mainTitle: '',
    subTitle: '',
    aboutCompany: '',
    whyChooseUs: '',
    yearsOfExperience: '',
    serviceHighlightOne: '',
    serviceHighlightTwo: '',
    serviceHighlightThree: '',
    customerReviewSectionTitle: '',
    featuredProductSectionTitle: '',
    teamDescription: '',
    bannerImage: null,
    teamGroupImage: null,
    galleryImages: [],
  };
  constructor(private api: ApiService) {

  }
  previewImages: any = {
    bannerImage: null,
    teamGroupImage: null
  };

  previewGalleryImages: string[] = [];

  // List of text fields to render
  textFields = [
    { name: 'mainTitle', label: 'Main Title' },
    { name: 'subTitle', label: 'Sub Title' },
    { name: 'aboutCompany', label: 'About Company' },
    { name: 'whyChooseUs', label: 'Why Choose Us' },
    { name: 'yearsOfExperience', label: 'Years Of Experience' },
    { name: 'serviceHighlightOne', label: 'Service Highlight One' },
    { name: 'serviceHighlightTwo', label: 'Service Highlight Two' },
    { name: 'serviceHighlightThree', label: 'Service Highlight Three' },
    { name: 'customerReviewSectionTitle', label: 'Customer Review Section Title' },
    { name: 'featuredProductSectionTitle', label: 'Featured Product Section Title' }
  ];

  // List of image fields to render
  imageFields = [
    { name: 'bannerImage', label: 'Banner Image' },
    { name: 'teamGroupImage', label: 'Team Group Image' }
  ];

  onGalleryImagesSelected(event: any) {
    this.selectedGalleryImages = Array.from(event.target.files);

    this.previewGalleryImages = [];
    this.selectedGalleryImages.forEach(file => {
      const reader = new FileReader();
      reader.onload = () => {
        this.previewGalleryImages.push(reader.result as string);
      };
      reader.readAsDataURL(file);
    });
  }

  clearForm(form: any) {
    form.resetForm();
    this.homeData = { id: 0, title: '', teamDescription: '' };
    this.previewImages = {};
    this.previewGalleryImages = [];
    this.selectedImages = {};
    this.selectedGalleryImages = [];
  }


  save(form: any): void {
    this.isLoading = true;

    // // Trim all text field values
    // for (let key in this.homeData) {
    //   if (typeof this.homeData[key] === 'string') {
    //     this.homeData[key] = this.homeData[key].trim();
    //   }
    // }

    // // Basic validation (you can expand this)
    // if (!this.homeData.title || this.homeData.title.trim() === '') {
    //   Swal.fire('Error', 'Please enter the Title', 'error');
    //   this.isLoading = false;
    //   return;
    // }

    const formData = new FormData();

    // Append text fields
    for (let key in this.homeData) {
      formData.append(key, this.homeData[key]);
    }

    // Append image files
    for (let key in this.selectedImages) {
      formData.append(key, this.selectedImages[key]);
    }

    // Append gallery images
    if (this.selectedGalleryImages && this.selectedGalleryImages.length > 0) {
      this.selectedGalleryImages.forEach((imgFile: File, index: number) => {
        formData.append('galleryImages', imgFile);
      });
    }

    const id = this.homeData.id || 0;
    const apiUrl = id === 0 ? 'api/HomeMaster/upload' : `api/HomeMaster/update/${id}`;

    const apiCall = id === 0
      ? this.api.postDataApi(apiUrl, formData)
      : this.api.updateDataApi('api/HomeMaster/update', formData, id);

    apiCall.subscribe({
      next: (res) => {
        Swal.fire('Success!', id === 0 ? 'Saved Successfully' : 'Updated Successfully', 'success');
        this.isLoading = false;
        this.clearForm(form);
        this.getData(); // Reload list
      },
      error: (err) => {
        const errorMessage = err?.error?.message || err?.message || 'Operation failed';
        Swal.fire('Error!', errorMessage, 'error');
        this.isLoading = false;
      }
    });
  }
  getData() {
    this.api.getDataApi(this.apiKey).subscribe((res: any) => {
      this.HomeList = res;
    })
  }

  selectedImages: any = {}; // e.g. { bannerImage: File, featureImage: File }
  selectedGalleryImages: File[] = [];

  onFileSelected(event: any, fieldName: string) {
    const file = event.target.files[0];
    if (file) {
      this.selectedImages[fieldName] = file;

      const reader = new FileReader();
      reader.onload = () => {
        this.previewImages[fieldName] = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

}
