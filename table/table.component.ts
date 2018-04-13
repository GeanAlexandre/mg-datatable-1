import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Column } from '../models/table';
import { ThComponent } from '../th/th.component';

@Component({
  selector: 'mg-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, AfterViewInit {
  @Input() columns: Column[];

  @ViewChild('ths') thead: ElementRef;

  constructor() { }

  ngOnInit() {
    this.columns = this.columns
      .map(col => Object.assign(new Column(), col));
  }

  ngAfterViewInit() {
    console.log(<ThComponent>this.thead.nativeElement.children[0]);
  }
}

