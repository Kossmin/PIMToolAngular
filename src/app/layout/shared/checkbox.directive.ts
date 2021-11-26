import { Directive, ElementRef, HostListener } from '@angular/core';
import { Subject } from 'rxjs';

@Directive({
  selector: '[appCheckbox]'
})
export class CheckboxDirective {

  constructor(private elRef: ElementRef) { }
  isChecked = new Subject<boolean>();
  @HostListener('change') check(event: any){
    this.isChecked.next(this.elRef.nativeElement.checked);
  }
}
