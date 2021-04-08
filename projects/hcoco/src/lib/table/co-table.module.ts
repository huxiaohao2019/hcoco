import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableTemplateComponent } from './table-template/table-template.component';
import { TableBaseComponent } from './table-base/table-base.component';
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
  declarations: [
    TableTemplateComponent,
    TableBaseComponent
  ],
  imports: [
    NzButtonModule,
    CommonModule
  ],
  exports: [
    TableTemplateComponent
  ]
})
export class CoTableModule { }
