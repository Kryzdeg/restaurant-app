import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
import { CartService } from '../cart-service.service';

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
      link: '/cart',
      badge: {
        text: this.cartService.countMeals().toString(),
        status: 'success'
      }
    },
  ];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.emitter.subscribe(() => {
      this.items = [
          {
            title: 'Posiłki',
            icon: 'book-open-outline',
            link: '/meals'
          },
          {
            title: 'Koszyk',
            icon: 'credit-card',
            link: '/cart',
            badge: {
              text: this.cartService.countMeals().toString(),
              status: 'success'
            }
          },
        ];
      })
  }

}
