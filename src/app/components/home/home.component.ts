import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  slides = [
    { image: 'assets/images/slide_01.jpg', textTop: 'we are ready to help you', textMain: `Financial Analysis<br>&amp;Consulting`, textBottom: 'This finance HTML template is 100% free of charge provided by TemplateMo for everyone. You can download, edit and use this layout for your business website.', link: 'contact.html', buttonText: 'contact us' },
    { image: 'assets/images/slide_02.jpg', textTop: 'we are here to support you', textMain: 'Accounting<br>&amp; Management', textBottom: 'You are allowed to use this template for your company websites. You are NOT allowed to re-distribute this template ZIP file on any template download website. Please contact TemplateMo for more detail.', link: 'services.html', buttonText: 'our services' },
    { image: 'assets/images/slide_03.jpg', textTop: 'we have a solid background', textMain: 'Market Analysis<br>&amp; Statistics', textBottom: 'Vivamus ut tellus mi. Nulla nec cursus elit, id vulputate mi. Sed nec cursus augue. Phasellus lacinia ac sapien vitae dapibus. Mauris ut dapibus velit cras interdum nisl ac urna tempor mollis.', link: 'about.html', buttonText: 'learn more' }
  ];
  
  currentSlideIndex = 0;
  private interval: any;

  constructor() { }

  ngOnInit(): void {
    this.startAutoSlide()
  }

  goToSlide(index: number): void {
    this.currentSlideIndex = index;
  }

  nextSlide(): void {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
  }

  prevSlide(): void {
    this.currentSlideIndex = (this.currentSlideIndex - 1 + this.slides.length) % this.slides.length;
    
  }
   startAutoSlide(): void {
    this.interval = setInterval(() => {
      this.nextSlide();
    }, 6000); // Cambia de diapositiva cada 2 segundos (2000 ms)
  }

   stopAutoSlide(): void {
    clearInterval(this.interval);
  }

}
