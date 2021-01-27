import { Component, OnInit } from '@angular/core';
import { MealsService } from "../meals.service";
import { Meal } from "../meals";


@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.css']
})
export class MealsComponent implements OnInit {

  meals: Meal[];

  getMeals(): void {
    this.mealsService.getMeals()
      .subscribe(meals => this.meals = meals);
  }

  constructor(private mealsService: MealsService) { }

  ngOnInit(): void {
    this.getMeals();
  }

}
