import { Component, OnInit } from '@angular/core';
import { MealsService } from "../meals.service";
import { Meal } from "../meals";


@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.css']
})
export class MealsComponent implements OnInit {

  all_meals: Meal[];
  meals : Meal[];

  getMeals(): void {
    this.mealsService.getMeals()
      .subscribe(meals => this.all_meals = this.meals = meals);
  }

  getAllMeals(): void {
    this.meals = this.all_meals;
  } 

  getStarters(): void {
    this.meals = this.all_meals.filter(s => s.meal_type === "starter");
  }
  
  getMainCourse(): void {
    this.meals = this.all_meals.filter(s => s.meal_type === "dinner");
  }
  
  getGrill(): void {
    this.meals = this.all_meals.filter(s => s.meal_type === "grill");
  }

  onTabChange(event): void {
    if (event.tabTitle === "Wszystko"){
      this.getMeals();
    }
    else if (event.tabTitle === "Przystawki"){
      this.getStarters();
    }
    else if (event.tabTitle === "Dania główne"){
      this.getMainCourse();
    }
    else if (event.tabTitle === "Koreański Grill"){
      this.getGrill();
    }
  }

  constructor(private mealsService: MealsService) { }

  ngOnInit(): void {
    this.getMeals();
  }

}
