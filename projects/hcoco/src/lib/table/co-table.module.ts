import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableTemplateComponent } from './table-template/table-template.component';



@NgModule({
  declarations: [
    TableTemplateComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    TableTemplateComponent
  ]
})
export class CoTableModule { }
