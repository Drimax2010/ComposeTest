import { Directive, ElementRef, HostListener, HostBinding, Input, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appEventHover]'
})
export class EventHoverDirective {

  @Output() mouseEntered = new EventEmitter<boolean>();

  constructor(private el: ElementRef) {
   }

  @Input() hoverColor: string;
  @HostBinding('style.backgroundColor') backgroundColor: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.backgroundColor = this.hoverColor;
    this.mouseEntered.emit(true);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor = 'transparent';
    this.mouseEntered.emit(false);
  }
}
