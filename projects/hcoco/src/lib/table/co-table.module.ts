import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableTemplateComponent } from './table-template/table-template.component';
import { TableBaseComponent } from './table-base/table-base.component';
import { AntCollectionModule } from '../ant-collection.module';

@NgModule({
  declarations: [
    TableTemplateComponent,
    TableBaseComponent
  ],
  imports: [
    AntCollectionModule,
    CommonModule
  ],
  exports: [
    TableTemplateComponent
  ]
})
export class CoTableModule { }
