import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-aboutus-drawer',
  imports: [CommonModule,FormsModule],
  templateUrl: './aboutus-drawer.component.html',
  styleUrl: './aboutus-drawer.component.scss'
})
export class AboutusDrawerComponent {
  @Input() drawerVisible: boolean = false;
  @Input() drawerClose: () => void = () => {};
  homeData = {
    description: '',
    image: null
  };
  drawervisible=false;


  previewImage: string | ArrayBuffer | null = null;

  save(form: any): void {
    if (!this.homeData.description.trim()) {
      alert('Please enter Description.');
      return;
    }
    if (!this.homeData.image) {
      alert('Please upload an Image.');
      return;
    }

    alert('Home Master Saved Successfully!');
    this.clearForm(form);
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = e => this.previewImage = reader.result;
      reader.readAsDataURL(file);
      this.homeData.image = file;
    }
  }

  clearForm(form: any): void {
    this.homeData = { description: '', image: null };
    this.previewImage = null;
    form.resetForm();
  }

}
