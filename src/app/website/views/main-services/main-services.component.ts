import { Component, Renderer2 } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-main-services',
  imports: [RouterModule],
  templateUrl: './main-services.component.html',
  styleUrl: './main-services.component.scss'
})
export class MainServicesComponent {
  constructor(private renderer: Renderer2) {}
  setDarkMode() {
    this.renderer.removeClass(document.body, 'light-mode');
    this.renderer.addClass(document.body, 'dark-mode');
  }

  setLightMode() {
    this.renderer.removeClass(document.body, 'dark-mode');
    this.renderer.addClass(document.body, 'light-mode');
  }
}
