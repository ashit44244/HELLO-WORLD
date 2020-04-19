import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  constructor(private el: ElementRef) {

   }

  @HostListener('focus') onFocus(){
    console.log("on focus");

  }

  @HostListener('blur') onBlur(){
    console.log("on blur");
    let value : string = this.el.nativeElement.value;
    this.el.nativeElement.value = value.toLocaleLowerCase;
  }



}
