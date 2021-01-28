import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MealsComponent } from './meals/meals.component';
import { CartComponent } from './cart/cart.component';


const routes: Routes = [
  { path: 'meals', component: MealsComponent },
  { path: 'cart', component: CartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
