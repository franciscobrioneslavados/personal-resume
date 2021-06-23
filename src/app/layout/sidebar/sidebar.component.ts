import { Component, OnInit } from '@angular/core';

export interface SocialInfo {
  iconClassInfo: string;
  url: string;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  public isCollapsed = false;

  public navigation: Array<string> = [
    'About',
    'Experience',
    'Education',
    'Projects',
    'Skills',
    'Interests',
  ];

  public socialData: SocialInfo[] = [
    {
      iconClassInfo: 'fa fa-twitter fa-stack-1x fa-inverse',
      url: 'https://twitter.com/GubsBenejam',
    },
    {
      iconClassInfo: 'fa fa-linkedin fa-stack-1x fa-inverse',
      url: 'https://www.linkedin.com/in/gabriela-benejam/',
    },
    {
      iconClassInfo: 'fa fa-github fa-stack-1x fa-inverse',
      url: 'https://github.com/gbenejam',
    },
    {
      iconClassInfo: 'fa fa-medium fa-stack-1x fa-inverse',
      url: 'https://medium.com/@gbenejamborras',
    },
  ];

  constructor() {}

  ngOnInit() {}

  makeLowerCase(value: string): string {
    return value.toLocaleLowerCase();
  }
}
