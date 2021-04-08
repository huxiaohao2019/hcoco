import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormTemplateComponent } from './form-template/form-template.component';
import { FormBaseComponent } from './form-base/form-base.component';
import { FormContainerComponent } from './form-container/form-container.component';



@NgModule({
  declarations: [FormTemplateComponent, FormBaseComponent, FormContainerComponent],
  imports: [
    CommonModule
  ]
})
export class CoFormModule { }
