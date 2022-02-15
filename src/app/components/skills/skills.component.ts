import { Component, OnInit } from '@angular/core';

export interface Skills {
  icon: string;
  name: string;
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  public skills: Skills[] = [
    {
      icon: 'devicon-java-plain colored',
      name: 'Java',
    },
    {
      icon: 'devicon-jquery-plain colored',
      name: 'JQuery',
    },
    {
      icon: 'devicon-nodejs-plain colored',
      name: 'NodeJS',
    },
    {
      icon: 'devicon-git-plain colored',
      name: 'Git',
    },
    {
      icon: 'devicon-html5-plain colored',
      name: 'HTML 5',
    },
    {
      icon: 'devicon-css3-plain colored',
      name: 'CSS 3',
    },
    {
      icon: 'devicon-javascript-plain colored',
      name: 'Javascript',
    },
    {
      icon: 'devicon-angularjs-plain colored',
      name: 'Angular',
    },
    {
      icon: 'devicon-vuejs-plain colored',
      name: 'VueJS',
    },
  ];

  skillArr: Array<string> = [
    'Specialised in Adobe Experience Manager',
    'Unit Testing',
    'Agile Development & Scrum',
    'Client oriented',
  ];

  public language: any[] = [
    {
      code: 'US',
      arrange: '100%',
    },
    {
      code: 'ES',
      arrange: '100%',
    },
    {
      code: 'FR',
      arrange: '100%',
    },
    {
      code: 'DE',
      arrange: '100%',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
