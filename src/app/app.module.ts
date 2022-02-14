import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MAIN_COMPONENTS } from './components';

import { NotFoundComponent } from './components/not-found/not-found.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [AppComponent, ...MAIN_COMPONENTS, NavbarComponent, NotFoundComponent, NavbarComponent, ContactComponent],
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
