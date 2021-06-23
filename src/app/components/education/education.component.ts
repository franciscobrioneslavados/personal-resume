import { Component, OnInit } from '@angular/core';

export interface EducationData {
  school: string;
  url: string;
  degree: string;
  department: string;
  startDate: string;
  endDate: string;
  icon: string;
  status: string;
}

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent implements OnInit {
  public educationArr: EducationData[] = [
    {
      school: 'Universitat Oberta de Catalunya',
      url: 'https://www.uoc.edu/',
      degree: 'Bachelor of Science',
      department: 'Software Engineering - Minor in Data Science',
      startDate: 'September 2016',
      endDate: 'June 2021',
      icon: 'fa-code',
      status: 'In Progress',
    },
    {
      school: 'Universitat de Barcelona',
      url: 'https://www.ub.edu/web/portal/en/',
      degree: 'Bachelor of Science',
      department: 'Physics',
      startDate: 'September 2012',
      endDate: 'June 2015',
      icon: 'fa-atom',
      status: 'Unfinished',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
