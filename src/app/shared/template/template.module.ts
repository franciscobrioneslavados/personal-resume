import { NgModule } from '@angular/core';
import { NzCollapseModule } from 'ng-zorro-antd';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTagModule } from 'ng-zorro-antd/tag';




@NgModule({
  declarations: [],
  exports: [
    NzButtonModule,
    NzCollapseModule,
    NzTagModule
  ]
})
export class TemplateModule { }