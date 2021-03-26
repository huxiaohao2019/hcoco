import { NgModule } from '@angular/core';
import { HcocoComponent } from './hcoco.component';
import { TableTemplateComponent } from './table/table-template/table-template.component';



@NgModule({
  declarations: [
    HcocoComponent,
    TableTemplateComponent
  ],
  imports: [
  ],
  exports: [
    HcocoComponent,
    TableTemplateComponent
  ]
})
export class HcocoModule { }
