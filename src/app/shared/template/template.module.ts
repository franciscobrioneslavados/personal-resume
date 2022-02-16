import { NgModule } from '@angular/core';
import { NzCollapseModule, NzGridModule, NzProgressModule } from 'ng-zorro-antd';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTagModule } from 'ng-zorro-antd/tag';

@NgModule({
  declarations: [],
  imports: [NzButtonModule, NzCollapseModule, NzTagModule, NzProgressModule, NzGridModule],
  exports: [NzButtonModule, NzCollapseModule, NzTagModule, NzProgressModule, NzGridModule],
})
export class TemplateModule {}
