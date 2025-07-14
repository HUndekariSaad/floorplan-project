import { Component } from '@angular/core';
import { ApiService } from '../../../../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contactus-master',
  imports: [CommonModule],
  templateUrl: './contactus-master.component.html',
  styleUrl: './contactus-master.component.scss'
})
export class ContactusMasterComponent {
 formTitle = "Home Master"
  apiKey: string = 'api/HomeMaster';
  HomeList: any  = [];

  dummyContactList = [
  {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '9876543210',
    service: ['Epoxy Flooring', 'Tile Protection'],
    message: 'I need epoxy flooring for my warehouse.'
  },
  {
    firstName: 'Jane',
    lastName: 'Smith',
    email: 'jane.smith@example.com',
    phone: '9123456789',
    service: ['PU Coating', 'Self-leveling Screed'],
    message: 'Interested in PU coating and screed service.'
  },
  {
    firstName: 'Rahul',
    lastName: 'Patel',
    email: 'rahul.patel@example.com',
    phone: '9988776655',
    service: ['Under Water Coating'],
    message: 'Need coating for water tank.'
  }
];

 constructor(private api: ApiService) {

  }

  ngOnInit() {
    this.getData();
  }
 


  

  edit(item: any): void {
    alert('Edit clicked: ' + item.description);
  }

  delete(item: any): void {
    const index = this.HomeList.indexOf(item);
    if (index !== -1) {
      this.HomeList.splice(index, 1);
    }
  }
   drawerTitle = "Add New picture";
  // drawerData: CustmoerCategoryData = new CustmoerCategoryData();
  drawervisible = false;
  add(){
     this.drawerTitle = "Add new Picture";
    this.drawervisible = true;
  }
  drawerClose(): void {
  this.drawervisible = false;
}

  closeCallback = () => {
  this.drawerClose();
};
  getData() {
    this.api.getDataApi(this.apiKey).subscribe((res: any) => {
      this.HomeList = res;
    })
  }
}
