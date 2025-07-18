import { CommonModule } from '@angular/common';
import { Component, Input, Renderer2 } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
declare var bootstrap: any;
@Component({
  selector: 'app-home',
  imports: [FormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit {
  // ngAfterViewInit(): void {
  //   const el = document.querySelector('#heroCarousel');
  //   if (el) {
  //     new bootstrap.Carousel(el);
  //   }
  // }
  constructor(private renderer: Renderer2) { }
  setDarkMode() {
    this.renderer.removeClass(document.body, 'light-mode');
    this.renderer.addClass(document.body, 'dark-mode');
  }

  ngAfterViewInit(): void {
    const counters = document.querySelectorAll('.counter');

    const options = {
      threshold: 0.5
    };

    const animateCounter = (counter: any) => {
      const target = +counter.getAttribute('data-target');
      let current = 0;
      const increment = Math.ceil(target / 200); // Smaller step = slower

      const updateCounter = () => {
        if (current < target) {
          current += increment;
          counter.textContent = current > target ? target : current;
          setTimeout(updateCounter, 20); // Delay per step in milliseconds
        } else {
          counter.textContent = target + '+';
        }
      };

      updateCounter();
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, options);

    counters.forEach(counter => {
      observer.observe(counter);
    });
  }
  name = '';
  email = '';
  phone = '';
  isVisible = false;
  closePopup() {
    this.isVisible = false;
    this.clear();
  }
  openBrochurePopup() {
    console.log("this.isVisible",this.isVisible)
    this.isVisible = true;
       console.log("this.isVisible",this.isVisible)
  }
  onOverlayClick(event: MouseEvent) {
    if ((<HTMLElement>event.target).classList.contains('brochure-modal')) {
      this.closePopup();
    }
  }

  submitForm() {
    // Handle submission (e.g., API or download)
    console.log('Submitted:', { name: this.name, email: this.email, phone: this.phone });

    // Trigger download (optional)
    const link = document.createElement('a');
    link.href = 'assets/brochure.pdf';
    link.download = 'brochure.pdf';
    link.click();

    this.closePopup();
  }
  clear(){
    this.name='';
    this.email='';
    this.phone='';
  }
}
