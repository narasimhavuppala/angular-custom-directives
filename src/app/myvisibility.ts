import { Directive, ElementRef, Renderer, HostListener } from '@angular/core';

@Directive({
  selector: '[visibility]'
})
export class VisibilityDirective {

  isVisible: boolean;

  constructor(private e: ElementRef, private r: Renderer) {
    r.setElementStyle(e.nativeElement, 'font-size', '22px');
    this.isVisible = false;
  }


  // To Listen to Events that are triggered by client
  @HostListener('dblclick')
  foo(isVisible) {
    if (isVisible) {
      this.e.nativeElement.style.display = 'block';
    }  else {
      this.e.nativeElement.style.display = 'none';
    }
  }

}
