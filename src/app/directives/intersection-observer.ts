import {
  Directive,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appIntersectionObserver]'
})
export class IntersectionObserver implements OnInit{
@Input('appIntersectionObserver') direction: 'left' | 'right' = 'right';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    // Explicit typing to avoid plugin confusion
    const observer: globalThis.IntersectionObserver = new (window as any).IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const className = this.direction === 'left' ? 'swing-left' : 'swing-right';
            this.renderer.addClass(this.el.nativeElement, className);
            this.renderer.setStyle(this.el.nativeElement, 'opacity', '1');
            this.renderer.addClass(this.el.nativeElement, 'animate-up');

            // Safely unobserve using type cast
            (observer as any).unobserve(entry.target);
          }
        }
      },
      { threshold: 0.2 }
    );

    // Safely observe using type cast
    (observer as any).observe(this.el.nativeElement);
  }
}

