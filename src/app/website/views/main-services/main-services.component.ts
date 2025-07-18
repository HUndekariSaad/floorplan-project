import { CommonModule } from '@angular/common';
import { Component, Renderer2 } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-main-services',
  imports: [RouterModule,CommonModule],
  templateUrl: './main-services.component.html',
  styleUrl: './main-services.component.scss'
})
export class MainServicesComponent {
  constructor(private renderer: Renderer2) { }
  setDarkMode() {
    this.renderer.removeClass(document.body, 'light-mode');
    this.renderer.addClass(document.body, 'dark-mode');
  }

  setLightMode() {
    this.renderer.removeClass(document.body, 'dark-mode');
    this.renderer.addClass(document.body, 'light-mode');
  }
  showMoreClients(sectionId: string): void {
    const section = document.getElementById(sectionId);
    if (!section) return;

    const hiddenCards = section.querySelectorAll('.hidden-client');
    hiddenCards.forEach(card => {
      if (card instanceof HTMLElement) {
        card.style.display = 'block';
      }
    });

    const button = section.nextElementSibling?.querySelector('button');
    if (button instanceof HTMLElement) {
      button.style.display = 'none';
    }
  }
  showMore = false;
toggleMoreClients(): void {
  this.showMore = !this.showMore;

  if (this.showMore) {
    setTimeout(() => {
      const element = document.getElementById('moreClients');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100); // Delay allows Angular to finish rendering
  }
}
showMoreIndian:boolean=false;
toggleMoreInternatinalClients(): void {
  this.showMoreIndian = !this.showMoreIndian;

  if (this.showMoreIndian) {
    setTimeout(() => {
      const element = document.getElementById('moreClients');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100); // Delay allows Angular to finish rendering
  }
}


}



