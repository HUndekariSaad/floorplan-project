import { Component } from '@angular/core';
import { ApiService } from '../../../../services/api.service';
import { IndianclientlogodrawerComponent } from '../indianclientlogodrawer/indianclientlogodrawer.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-indianclientlogomaster',
  imports: [IndianclientlogodrawerComponent,CommonModule, FormsModule],
  templateUrl: './indianclientlogomaster.component.html',
  styleUrl: './indianclientlogomaster.component.scss'
})
export class IndianclientlogomasterComponent {
formTitle = 'Client Logo Master';
  drawerTitle = 'Add New Client';
  drawervisible = false;

  clientList = [
    { clientName: 'ABC Corp', websiteUrl: 'https://abc.com', logoUrl: 'https://via.placeholder.com/100' },
    { clientName: 'XYZ Ltd', websiteUrl: 'https://xyz.com', logoUrl: '' },
  ];

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.api.getDataApi('api/Client').subscribe((res: any) => {
      this.clientList = res;
    });
  }

  edit(item: any) {
    alert('Edit: ' + item.clientName);
  }

  delete(item: any) {
    const index = this.clientList.indexOf(item);
    if (index !== -1) {
      this.clientList.splice(index, 1);
    }
  }

  add() {
    this.drawerTitle = 'Add New Client';
    this.drawervisible = true;
  }

  drawerClose(): void {
    this.drawervisible = false;
  }

  closeCallback = () => {
    this.drawerClose();
  };
}
