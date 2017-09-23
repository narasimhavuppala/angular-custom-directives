import { Directive, ElementRef, Renderer, HostListener, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[mycolor]'
})
export class MycolorDirective {

  colors: string[] = ['red', 'green', 'yellow'];
  color: string = this.findColor(this.colors);

  constructor(private e: ElementRef, private r: Renderer) {
    // e.nativeElement.style.fontSize = '22px'
    // r.setElementStyle(e.nativeElement, 'font-size', '22px');
    this.colors = ['green', 'yellow', 'black'];
  }

  findColor(array: string[]): string {
    return array[Math.floor(Math.random() * array.length)];
  }



  @HostListener('mouseenter') foo() {
    this.e.nativeElement.style.color = this.color;
    // this.e.nativeElement.innerHTML= this.e.nativeElement.innerHTML.toUpperCase();
  }

  ngOnInit() { // reached after all bound properties are initilized
    // this.myShadow = this.defaultShadow;
    console.log('test it');
  }

}
