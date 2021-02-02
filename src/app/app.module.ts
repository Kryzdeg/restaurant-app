import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule,
        NbLayoutModule,
        NbButtonModule,
        NbMenuModule,
        NbSidebarModule,
        NbCardModule,
        NbTabsetModule,
        NbIconModule,
        NbListModule,
        NbToastrModule
} from '@nebular/theme';

import { NbEvaIconsModule } from '@nebular/eva-icons';
import { MenuSideBarComponent } from './menu-side-bar/menu-side-bar.component';
import { MealsComponent } from './meals/meals.component';
import { MealItemComponent } from './meal-item/meal-item.component';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './cart/cart.component';
import { MealsListComponent } from './meals-list/meals-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuSideBarComponent,
    MealsComponent,
    MealItemComponent,
    CartComponent,
    MealsListComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'dark' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbIconModule,
    NbButtonModule,
    NbCardModule,
    NbListModule,
    NbTabsetModule,
    NbToastrModule.forRoot(),
    NbMenuModule.forRoot(),
    NbSidebarModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
