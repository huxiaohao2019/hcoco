import { NgModule } from '@angular/core';
import { HcocoComponent } from './hcoco.component';

import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { zh_CN } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// antd
import { NzButtonModule } from 'ng-zorro-antd/button';
import { CoTableModule } from './table/co-table.module';

registerLocaleData(zh);


@NgModule({
  declarations: [
    HcocoComponent,
  ],
  imports: [
    NzButtonModule,
    CoTableModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  exports: [
    CoTableModule,
    HcocoComponent,

  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }]
})
export class HcocoModule { }
