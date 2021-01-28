import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-menu-side-bar',
  templateUrl: './menu-side-bar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuSideBarComponent implements OnInit {

  items: NbMenuItem[] = [
    {
      title: 'Posiłki',
      icon: 'book-open-outline',
      expanded: true,
      children: [
        {
          title: 'Wszystko',
          link: '/meals'
        },
        {
          title: 'Przystawki',
          icon: 'book-open-outline',
        },
        {
          title: 'Dania główne',
          icon: 'star-outline',
        },
        {
          title: 'Korea Grill',
          icon: 'heart',
        },
        {
          title: 'Herbaty',
          icon: 'droplet',
        },
      ]
    },
    {
      title: 'Koszyk',
      icon: 'credit-card',
      link: '/cart'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
