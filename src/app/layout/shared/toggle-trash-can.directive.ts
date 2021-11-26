import { Directive, ElementRef, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { CheckboxDirective } from './checkbox.directive';

@Directive({
  selector: '[appToggleTrashCan]'
})
export class ToggleTrashCanDirective implements OnInit, OnDestroy {

  constructor(private elRef: ElementRef, private checkbox: CheckboxDirective){}

  @HostBinding('attr.disabled') disable;
  subcriptions;
  ngOnInit() {
    this.subcriptions = this.checkbox.isChecked.subscribe((isChecked) => {
      console.log('hell');
    });
  }

  ngOnDestroy(){
    this.subcriptions.unsubscribe();
  }
}
