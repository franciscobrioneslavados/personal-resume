import { Component, OnInit } from '@angular/core';

export interface Skills {
  name: string;
  key: string;
  child: ChildSkills[];
}

export interface ChildSkills {
  imgUrl: string;
  name: string;
  percent: number;
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  public skills: Skills[] = [
    {
      name: 'Programming languages',
      key: 'programming_languages',
      child: [
        {
          imgUrl:
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
          name: 'JavaScript',
          percent: 80,
        },
        {
          imgUrl: 'assets/images/icons/terraform.png',
          name: 'Terraform',
          percent: 80,
        },
        {
          imgUrl:
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg',
          name: 'GO',
          percent: 30,
        },
        {
          imgUrl:
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
          name: 'Python',
          percent: 40,
        },
      ],
    },
    {
      name: 'Frameworks',
      key: 'frameworks',
      child: [
        {
          imgUrl:
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
          name: 'ExpressJS',
          percent: 80,
        },
        {
          imgUrl:
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg',
          name: 'NestJS',
          percent: 80,
        },
        {
          imgUrl:
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
          name: 'ReactJS',
          percent: 80,
        },
        {
          imgUrl:
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
          name: 'AngularJS',
          percent: 80,
        },
        {
          imgUrl:
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg',
          name: 'Flask',
          percent: 30,
        },
      ],
    },
    {
      name: 'Cloud',
      key: 'cloud',
      child: [
        {
          imgUrl:
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg',
          name: 'Azure',
          percent: 50,
        },
        {
          imgUrl:
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg',
          name: 'GCP',
          percent: 80,
        },
        {
          imgUrl:
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg',
          name: 'AWS',
          percent: 60,
        },
        {
          imgUrl:
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-original.svg',
          name: 'DigitalOcean',
          percent: 70,
        },
        {
          imgUrl:
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
          name: 'Docker',
          percent: 80,
        },
        {
          imgUrl:
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg',
          name: 'Kubernetes',
          percent: 80,
        },
      ],
    },
    {
      name: 'Data Bases',
      key: 'data-base',
      child: [
        {
          percent: 80,
          name: 'PostgreSQL',
          imgUrl:
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
        },
        {
          percent: 80,
          name: 'MySQL',
          imgUrl:
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
        },
        {
          name: 'MongoDB',
          imgUrl:
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
          percent: 70,
        },
      ],
    },
    {
      name: 'CICD',
      key: 'cicd',
      child: [
        {
          imgUrl:
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg',
          name: 'GitLab',
          percent: 80,
        },
        {
          imgUrl:
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
          name: 'Github',
          percent: 90,
        },
        {
          imgUrl:
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitbucket/bitbucket-original.svg',
          name: 'Bitbucket',
          percent: 40,
        },
        {
          imgUrl:
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-line.svg',
          name: 'Jenkins',
          percent: 30,
        },
        {
          imgUrl:
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/circleci/circleci-plain.svg',
          name: 'CircleCI',
          percent: 10,
        },
      ],
    },
  ];

  public lenguages = this.skills.filter(
    (values) => values.key === 'programming_languages'
  )[0];
  public dataBases = this.skills.filter(
    (values) => values.key === 'data-base'
  )[0];
  public cicd = this.skills.filter((values) => values.key === 'cicd')[0];
  public frameworks = this.skills.filter(
    (values) => values.key === 'frameworks'
  )[0];
  public cloud = this.skills.filter((values) => values.key === 'cloud')[0];

  skillArr: Array<string> = [
    'Specialised in Adobe Experience Manager',
    'Unit Testing',
    'Agile Development & Scrum',
    'Client oriented',
  ];

  public language: any[] = [
    {
      code: 'US',
      arrange: '70%',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
