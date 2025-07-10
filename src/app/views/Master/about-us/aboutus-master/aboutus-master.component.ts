import { Component } from '@angular/core';
import { AboutusDrawerComponent } from '../aboutus-drawer/aboutus-drawer.component';

@Component({
  selector: 'app-aboutus-master',
  imports: [AboutusDrawerComponent],
  templateUrl: './aboutus-master.component.html',
  styleUrl: './aboutus-master.component.scss'
})
export class AboutusMasterComponent {
formTitle = "About Us Master"
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
