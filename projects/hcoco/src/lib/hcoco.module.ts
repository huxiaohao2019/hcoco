import { NgModule } from '@angular/core';
import { HcocoComponent } from './hcoco.component';
import { TableTemplateComponent } from './table/table-template/table-template.component';

import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { zh_CN } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// antd
import { NzButtonModule } from 'ng-zorro-antd/button';

registerLocaleData(zh);


@NgModule({
  declarations: [
    HcocoComponent,
    TableTemplateComponent
  ],
  imports: [
    NzButtonModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  exports: [
    HcocoComponent,
    TableTemplateComponent
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }]
})
export class HcocoModule { }
