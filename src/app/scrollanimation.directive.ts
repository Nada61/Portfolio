import { Directive , ElementRef, Input, Renderer2, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appScrollanimation]'
})
export class ScrollanimationDirective implements AfterViewInit {

  scrollHeight: number = 0;
  elementPosition: any;
  distance: number = 0;

  constructor(private element: ElementRef, private renderer: Renderer2) { }
  @Input('className') className: any


  ngAfterViewInit(): void {
    document.addEventListener('scroll', () => {
      this.scrollHeight = window.innerHeight;
      this.elementPosition = this.element.nativeElement.getBoundingClientRect().top;
      this.distance = this.elementPosition - this.scrollHeight;
      if (this.distance < -100) {
        this.setStyle();
      }
    });
  }

  setStyle() {

    this.renderer.removeClass(
      this.element.nativeElement,
      `opacity-0`,
    );

    this.renderer.addClass(
      this.element.nativeElement,
      `opacity-100`,
    );

    this.renderer.addClass(
      this.element.nativeElement,
      `animate__${this.className}`,
    );

  }

}
