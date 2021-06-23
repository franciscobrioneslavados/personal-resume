import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MAIN_COMPONENTS } from './components';

import { SidebarComponent } from './layout/sidebar/sidebar.component';

@NgModule({
  declarations: [AppComponent, ...MAIN_COMPONENTS, SidebarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ScrollToModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
