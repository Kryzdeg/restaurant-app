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
      title: 'Śniadania',
      icon: 'book-open-outline',
    },
    {
      title: 'Dania główne',
      icon: 'star-outline',
    },
    {
      title: 'Desery',
      icon: 'heart',
    },
    {
      title: 'Napoje',
      icon: 'droplet',
    },
    {
      title: 'Koszyk',
      icon: 'credit-card',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
