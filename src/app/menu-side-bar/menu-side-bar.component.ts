import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
import { CartService } from '../cart-service.service';

@Component({
  selector: 'app-menu-side-bar',
  templateUrl: './menu-side-bar.component.html',
})
export class MenuSideBarComponent implements OnInit {
  
  private getItems() { 
    return [
      {
        title: 'Posiłki',
        icon: 'book-open-outline',
        link: '/meals',
        active: true
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
  }
  
  items: NbMenuItem[] = this.getItems();

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.emitter.subscribe(() => {
      this.items = this.getItems();
    })
  }

}
