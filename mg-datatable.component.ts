import {
  Component,
  QueryList,
  AfterContentInit,
  ContentChildren,
  Input,
  OnInit
} from "@angular/core";

import { MgDataTable } from './models/MgDataTable';
import { HeaderDirective } from './directives/header.directive';
import { Header } from "./models/Header";

@Component({
  selector: 'mg-datatable',
  templateUrl: './mg-datatable.component.html'
})

export class MgDatatableComponent implements OnInit, AfterContentInit {

  @Input()
  data: MgDataTable

  @ContentChildren(HeaderDirective)
  private headersDirective: QueryList<HeaderDirective>

  private headers: Header[]
  private values: any[]

  ngOnInit(): void {
    this.headers = this.data.headers
    this.values = this.data.values
  }

  ngAfterContentInit() {
    this.mergeHeaders()
  }

  private mergeHeaders() {
    this.headers = this.data.headers
      .map(header => this.replaceDisplayAsColumn(header))
      .map(header => this.replaceHeaderToCustomHeader(header))
      .concat(this.getNewCustomHedaers())
  }

  private replaceDisplayAsColumn(header: Header): Header {
    header.display = header.column
    return header
  }

  private replaceHeaderToCustomHeader(header: Header): Header {
    const customHeaders = this.headersDirective.map(h => h.model)
    var customHeader = customHeaders.find(h => h.column == header.column)
    return Boolean(customHeader) ? customHeader : header
  }

  private getNewCustomHedaers(): Header[] {
    return this.headersDirective
      .filter(ch => !this.data.headers.some(h => h.column == ch.model.column))
      .map(h => h.model)
  }

}