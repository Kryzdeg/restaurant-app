import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meal-item',
  templateUrl: './meal-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class MealItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
