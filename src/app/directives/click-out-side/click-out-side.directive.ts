import { Directive, ElementRef, HostListener, Output, EventEmitter, Input  } from '@angular/core';

@Directive({
  selector: '[clickOutside]',
  standalone: true
})
export class ClickOutSideDirective {

  @Output() clickOutside = new EventEmitter<void>();
  @Input() isActive: boolean = false;

  constructor(private elementRef: ElementRef) {}

  @HostListener('document:click', ['$event.target'])
  public onClick(targetElement: any): void {
    const clickedInside = this.elementRef.nativeElement.contains(targetElement);
    if (this.isActive && !clickedInside) {
      this.clickOutside.emit();
    }
  }
}
