import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  images: HTMLElement;
  img: NodeListOf<HTMLElement>;
  id = 0;
  dots: NodeListOf<HTMLElement>;

  constructor() { }

  ngOnInit() {
    this.images = document.querySelector(".img-container");
    this.img = document.querySelectorAll(".img-container img");
    this.dots = document.querySelectorAll(".dots svg");
    setInterval(() => {
      this.id++;
      if (this.id > this.img.length - 1) {
        this.id = 0;
      }
      this.transitionCarousel();
    }, 5000);
  }

  transitionCarousel() {
    this.images.style.transform = `translateX(${-this.id * 1200}px)`;

    // Reset all dots to initial color
    this.dots.forEach(dot => {
      dot.style.backgroundColor = 'transparent';
    });

    // Highlight current dot
    // this.dots[this.id].style.backgroundColor = '#000';
    this.dots[this.id].style.color = '#000';
  }

  goRight() {
    this.id++;
    if (this.id > this.img.length - 1) {
      this.id = 0;
    }
    this.transitionCarousel();
  }

  goLeft() {
    this.id -= 1;
    if (this.id < 0) {
      this.id = this.img.length - 1;
    }
    this.transitionCarousel();
  }
}
