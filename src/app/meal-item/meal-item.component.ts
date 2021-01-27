import { ChangeDetectionStrategy, Component, OnInit, Input } from '@angular/core';
import { Meal } from '../meals';

@Component({
  selector: 'app-meal-item',
  templateUrl: './meal-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class MealItemComponent implements OnInit {

  @Input() meal: Meal;

  constructor() { }

  ngOnInit(): void {
  }

}
