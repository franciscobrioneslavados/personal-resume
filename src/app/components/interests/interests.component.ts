import { Component, OnInit } from '@angular/core';

export interface Interest {
  name: string;
  icon: string;
}

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.scss'],
})
export class InterestsComponent implements OnInit {
  public interests: Interest[] = [
    {
      name: 'Photography',
      icon: 'fa-camera-retro',
    },
    {
      name: 'Programming',
      icon: 'fa-code',
    },
    {
      name: 'Sports',
      icon: 'fa-dumbbell',
    },
    {
      name: 'Gaming',
      icon: 'fa-gamepad',
    },
    {
      name: 'Nature',
      icon: 'fa-feather-alt',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
