import { Component } from '@angular/core';
import { HomeDrawerComponent } from '../home-drawer/home-drawer.component';

@Component({
  selector: 'app-home-master',
  imports: [HomeDrawerComponent],
  templateUrl: './home-master.component.html',
  styleUrl: './home-master.component.scss'
})
export class HomeMasterComponent {
  formTitle = "Home Master"
  homeList = [
    { description: 'Welcome to Our Website', imageUrl: 'https://via.placeholder.com/100' },
    { description: 'Explore Our Services', imageUrl: '' }
  ];

  edit(item: any): void {
    alert('Edit clicked: ' + item.description);
  }

  delete(item: any): void {
    const index = this.homeList.indexOf(item);
    if (index !== -1) {
      this.homeList.splice(index, 1);
    }
  }
   drawerTitle = "Add New picture";
  // drawerData: CustmoerCategoryData = new CustmoerCategoryData();
  drawervisible = false;
  add(){
     this.drawerTitle = "Add new Picture";
    // this.drawerData = new CustmoerCategoryData();
    this.drawervisible = true;
  }
  drawerClose(): void {
  this.drawervisible = false;
}

  closeCallback = () => {
  this.drawerClose();
};

}
