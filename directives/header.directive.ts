import {
  Directive,
  OnInit,
  Input,
  ElementRef
} from '@angular/core';

import { Header } from './../models/Header';

@Directive({
  selector: '[header]'
})

export class HeaderDirective implements OnInit {

  model: Header

  @Input()
  private header: string

  constructor(
    private elementRef: ElementRef
  ) { }

  ngOnInit(): void {
    this.model = { column: this.header, display: this.elementRef.nativeElement.innerHTML } as Header
  }
}
