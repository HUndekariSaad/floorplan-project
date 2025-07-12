import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { ApiService } from '../../../../services/api.service';
import { IndianclientdrawerComponent } from '../indianclientdrawer/indianclientdrawer.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-indianclientmaster',
  imports: [CommonModule, FormsModule,IndianclientdrawerComponent],
  templateUrl: './indianclientmaster.component.html',
  styleUrl: './indianclientmaster.component.scss'
})
export class IndianclientmasterComponent {
 formTitle = "Client Master";
  drawerTitle = "Add New Client";
  drawerVisible = false;
  apiKey = 'api/ClientMaster';

  clientList: any[] = [];

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.getData();
  }

  add() {
    this.drawerTitle = 'Add New Client';
    this.drawerVisible = true;
  }

  drawerClose(): void {
    this.drawerVisible = false;
  }

  closeCallback = () => {
    this.drawerClose();
    this.getData();
  };

  getData() {
    this.api.getDataApi(this.apiKey).subscribe((res: any) => {
      this.clientList = res;
    });
  }

  edit(item: any) {
    // You can store selected item and pass to drawer via @Input
    alert('Edit Clicked: ' + item.fullName);
  }

  delete(item: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: `Delete ${item.fullName}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        // Call delete API
        this.api.deleteDataApi(this.apiKey, item.id).subscribe(() => {
          Swal.fire('Deleted!', 'Client has been deleted.', 'success');
          this.getData();
        });
      }
    });
  }
}
