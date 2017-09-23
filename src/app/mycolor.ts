import { Directive, ElementRef,  Renderer, HostListener  } from '@angular/core';

@Directive({
    selector: '[mycolor]'
})
export class MycolorDirective {

  colors: string[] = ['red', 'green', 'orange'];
  color: string = this.findColor(this.colors);

  constructor(private e: ElementRef, private r: Renderer) {
    this.colors = ['green', 'yellow', 'black'];
  }

  findColor(array: string[]): string {
    return array[Math.floor(Math.random() * array.length)];
  }

  @HostListener('mouseenter')
  foo() {
    //this.e.nativeElement.style.color = this.color;
    this.r.setElementStyle(this.e.nativeElement, 'color', this.color);
  }


}
