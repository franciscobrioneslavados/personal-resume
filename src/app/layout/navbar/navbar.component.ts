import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public navBarRoutes: any[] = [
    {
      name: 'About',
      path: 'about',
    },
    {
      name: 'Education',
      path: 'education',
    },
    {
      name: 'Experience',
      path: 'experience',
    },
    {
      name: 'Skills',
      path: 'skills',
    },
    {
      name: 'Projects',
      path: 'projects',
    },
    {
      name: 'Interests',
      path: 'interests',
    },
    {
      name: 'Contact',
      path: 'contact',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
