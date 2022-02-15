import { NgModule } from '@angular/core';
import { TemplateModule } from './template/template.module';
import { DeviconService } from './devicon/devicon.service';

@NgModule({
  declarations: [],
  providers: [DeviconService],
  exports: [TemplateModule],
})
export class SharedModule {}
