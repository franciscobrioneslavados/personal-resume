import { Component, OnInit } from '@angular/core';

export interface ExperienceData {
  title: string;
  position: string;
  company: string;
  city: string;
  duties: string;
  startDate: string;
  endDate: string;
  techStack: { name: string; imageUrl: string }[];
}

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent implements OnInit {
  public experienceData: ExperienceData[] = [
    {
      title: 'Ingeniero en Software',
      position: 'Teach Lead',
      company: 'MITS',
      city: 'Santiago, Chile',
      duties:
        'Business Analysis. Tech leading. Architecting. Building Proofs of Concept. Implementing solutions using AEM, Angular and Spring as a microservice.',
      startDate: 'Octubre 2021',
      endDate: 'Present',
      techStack: [
        {
          name: 'Docker',
          imageUrl:
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
        },
        {
          name: 'Kubernetes',
          imageUrl:
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg',
        },
        {
          name: 'Gitlab',
          imageUrl:
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg',
        },
        {
          name: 'NodeJS',
          imageUrl:
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
        },
        {
          name: 'NestJS',
          imageUrl:
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg',
        },
        {
          name: 'ReactJS',
          imageUrl:
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        },
        {
          name: 'GCP',
          imageUrl:
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg',
        },
      ],
    },
    {
      title: 'Ingeniero en Software',
      position: 'Full Stack Developer',
      company: 'SmartJob',
      city: 'Santiago, Chile',
      duties:
        'Consultora de desarrollo de proyectos y con un alto número de clientes, entre los que ejerzo labores en Falabella Financiero [FIFTECH]',
      startDate: 'Mayo 2021',
      endDate: 'Octubre 2021',
      techStack: [
        {
          name: 'Docker',
          imageUrl:
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
        },
        {
          name: 'Kubernetes',
          imageUrl:
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg',
        },
        {
          name: 'Gitlab',
          imageUrl:
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg',
        },
        {
          name: 'Jenkins',
          imageUrl:
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg',
        },
        {
          name: 'Nodejs',
          imageUrl:
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
        },
        {
          name: 'Angularjs',
          imageUrl:
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
        },
        {
          name: 'Redis',
          imageUrl:
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
        },
        {
          name: 'MySQL',
          imageUrl:
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
        },
        {
          name: 'Vault',
          imageUrl: 'assets/images/icons/vault.png',
        },
        {
          name: 'Harbor',
          imageUrl: 'https://goharbor.io/img/logos/harbor-icon-color.png',
        },
        {
          name: 'Portainer',
          imageUrl: 'https://onthedock.github.io/images/portainer.png',
        },
        {
          name: 'Terraform',
          imageUrl: 'assets/images/icons/terraform.png',
        },
        {
          name: 'Azure',
          imageUrl:
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg',
        },
      ],
    },
    {
      title: 'Ingeniero en Software',
      position: 'Full Stack Developer',
      company: 'Kibernum Chile',
      city: 'Santiago, Chile',
      duties:
        'Consultora de 29 años de experiencia en desarrollo de proyectos y con un alto número de clientes, entre los que ejercí labores en Sura Inversiones',
      startDate: 'Septiembre 2020',
      endDate: 'Mayo 2021',
      techStack: [
        {
          name: 'Docker',
          imageUrl:
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
        },
        {
          name: 'Kubernetes',
          imageUrl:
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg',
        },
        {
          name: 'Gitlab',
          imageUrl:
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg',
        },
        {
          name: 'NodeJS',
          imageUrl:
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
        },
        {
          name: 'NestJS',
          imageUrl:
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg',
        },
        {
          name: 'Angularjs',
          imageUrl:
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
        },
        {
          name: 'MySQL',
          imageUrl:
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
        },
        {
          name: 'Firebase',
          imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
        },
        {
          name: 'GCP',
          imageUrl:
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg',
        },
      ],
    },
    {
      title: 'Ingeniero en Software',
      position: 'Full Stack Developer',
      company: 'Imagemaker S.A',
      city: 'Santiago, Chile',
      duties:
        'Consultora de 20 años de experiencia en desarrollo de proyectos y con un alto número de clientes, entre los que ejercí labores en Falabella Retail y Cencosud Scotiabank.',
      startDate: 'Noviembre 2019',
      endDate: 'Agosto 2020',
      techStack: [
        {
          name: 'Docker',
          imageUrl:
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
        },
        {
          name: 'Kubernetes',
          imageUrl:
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg',
        },
        {
          name: 'Gitlab',
          imageUrl:
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg',
        },
        {
          name: 'NodeJS',
          imageUrl:
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
        },
        {
          name: 'Angularjs',
          imageUrl:
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
        },
        {
          name: "PostgreSQL",
          imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        },
        {
          name: 'GCP',
          imageUrl:
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg',
        },
        {
          name: 'Azure',
          imageUrl:
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg',
        },
      ],
    },
    {
      title: 'Analyst Deeveloper',
      position: 'Full Stack Developer',
      company: 'StarConsulting',
      city: 'Santiago, Chile',
      duties:
        'Consultora SAP servicios en diversos mercados entregando  consultoría y proyectos en SAP y SAP FIORI',
      startDate: 'Enero 2019',
      endDate: 'Noviembre 2020',
      techStack: [
        {
          name: 'Java',
          imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
        },
        {
          name: 'AngularJS',
          imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
        },
        {
          name: 'NodeJS',
          imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
        },
        {
          name: 'AWS',
          imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg',
        },
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
