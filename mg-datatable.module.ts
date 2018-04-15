import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderDirective } from './directives/header.directive';
import { MgDatatableComponent } from './mg-datatable.component';

@NgModule({
    declarations: [
        MgDatatableComponent,
        HeaderDirective
    ],
    imports: [CommonModule],
    exports: [
        MgDatatableComponent,
        HeaderDirective
    ]
})

export class MgDataTableModule { }
