import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableComponent } from './table/table.component';
import { ThComponent } from './th/th.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TableComponent,
    ThComponent
  ],
  exports: [
    TableComponent,
    ThComponent
  ]
})
export class MgDatatableModule { }
