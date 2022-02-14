import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-navbar></app-navbar>

    <div class="container">
      <app-about></app-about>
      <app-education></app-education>
      <app-experience></app-experience>
      <app-skills></app-skills>
      <app-projects></app-projects>
      <app-interests></app-interests>
      <app-contact></app-contact>
    </div>
  `,
})
export class AppComponent {}
