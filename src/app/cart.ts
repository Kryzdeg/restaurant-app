import { Meal } from "./meals";

export interface Cart {
    meals: Meal[],
    discount: number,
    price_sum: number
}