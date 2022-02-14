import { Component, OnInit } from '@angular/core';

export interface PersonalInformation {
  firstName: string;
  lastName: string;
  address: Address;
  email: string;
  description: string;
  quote: string;
}

export interface Address {
  city: string;
  state: string;
}

export interface SocialInfo {
  iconClassInfo: string;
  url: string;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  public personalInfo: PersonalInformation = {
    firstName: 'Franacisco Briones',
    lastName: 'Briones Lavados',
    address: {
      city: 'Santo Domingo',
      state: 'V Region',
    },
    email: 'franciscobrioneslavados@gmail.com',
    description:
      'Full Stack developer. Currently working as a Senior Consultant developing web solutions with Adobe Experience Manager. Exploring different Web Technologies on my free time.',
    quote: 'Never stop learning; for when we stop learning, we stop growing.',
  };

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

  ngOnInit(): void {}
}