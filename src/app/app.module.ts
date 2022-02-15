import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MAIN_COMPONENTS } from './components';
import { HttpClientModule } from '@angular/common/http';

import { NavbarComponent } from './layout/navbar/navbar.component';
import { SharedModule } from './shared/shared.module';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { en_US, NZ_I18N, NzI18nModule } from 'ng-zorro-antd/i18n';
import { SafePipe } from './pipes/safe.pipe';
import { TemplateModule } from './shared/template/template.module';

@NgModule({
  declarations: [SafePipe, AppComponent, NavbarComponent, ...MAIN_COMPONENTS],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScrollToModule.forRoot(),
    SharedModule,
    HttpClientModule,
    NoopAnimationsModule,
    TemplateModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
})
export class AppModule {}
