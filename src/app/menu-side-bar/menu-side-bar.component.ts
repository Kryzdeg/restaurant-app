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
      link: '/meals'
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
