import { Component, Input } from '@angular/core';

@Component({
  selector: 'mg-th',
  templateUrl: './th.component.html',
  styleUrls: ['./th.component.css']
})
export class ThComponent {
  @Input() bind: string;

  constructor() { }

}
