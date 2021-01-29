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

  tabs: any[] = [
    {
      title: 'Przystawski',
      route: '/tab1',
    },
    {
      title: 'Dania główne',
      responsive: true,
      route: '/tab2' ,
    },
    {
      title: 'Korean Grill',
      responsive: true,
      route: '/tab3' ,
    },
    {
      title: 'Herbaty',
      responsive: true,
      route: '/tab4' ,
    },
  ];

  getMeals(): void {
    this.mealsService.getMeals()
      .subscribe(meals => this.meals = meals);
  }

  getStarters(): void {
    this.meals = this.meals.filter(s => s.meal_type === "starter");
  }

  constructor(private mealsService: MealsService) { }

  ngOnInit(): void {
    this.getMeals();
  }

}
