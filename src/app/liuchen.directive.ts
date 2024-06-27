import {Directive, ElementRef} from "@angular/core";

@Directive({
  selector: '[appliuChen]',
  standalone: true
})
export class LiuchenDirective{
  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = "red";
  }
}
