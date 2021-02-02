import { Component, OnInit, Input } from '@angular/core';
import { Meal } from "../meals";


@Component({
  selector: 'app-meals-list',
  templateUrl: './meals-list.component.html',
  styleUrls: ['./meals-list.component.css']
})
export class MealsListComponent implements OnInit {

  @Input() meals: Meal[];

  constructor() { }

  ngOnInit(): void {
  }

}
