import { Component, Renderer2 } from '@angular/core';
import { AfterViewInit } from '@angular/core';
declare var bootstrap: any;
@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const el = document.querySelector('#heroCarousel');
    if (el) {
      new bootstrap.Carousel(el);
    }
  }
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
