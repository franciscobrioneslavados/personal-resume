import { Component, OnInit } from '@angular/core';

export interface ExperienceData {
  title: string;
  company: string;
  city: string;
  duties: string;
  startDate: string;
  endDate: string;
}

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent implements OnInit {
  public experienceArr: ExperienceData[] = [
    {
      title: 'Senior Consultant',
      company: 'Valtech',
      city: 'Geneva',
      duties:
        'Business Analysis. Tech leading. Architecting. Building Proofs of Concept. Implementing solutions using AEM, Angular and Spring as a microservice.',
      startDate: 'February 2019',
      endDate: 'Present',
    },
    {
      title: 'Adobe Experience Cloud Consultant',
      company: 'Blue Infinity',
      city: 'Geneva',
      duties:
        'Tech leading. Providing Web solutions using AEM with Java and Javascript. Resolving client issues. Testing products and applications. Documenting processes and application instructions. Supporting and troubleshooting software issues. Conducting training sessions and workshops. Generating innovate ideas',
      startDate: 'August 2017',
      endDate: 'January 2019',
    },
    {
      title: 'Junior Web Developer',
      company: 'Netcentric',
      city: 'Barcelona',
      duties:
        'Agile Environment. Providing Web solutions using AEM with Java and Javascript. Testing products and applications. Documenting processes and application instructions.',
      startDate: 'September 2015',
      endDate: 'July 2017',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
