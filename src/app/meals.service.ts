import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Meal } from './meals';


@Injectable({
  providedIn: 'root'
})
export class MealsService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  private mealsUrl = 'http://localhost:8000/api/meals/'
  // private mealsUrl = 'http://kryzdeg.ct8.pl/api/meals/'

  getMeals(): Observable<Meal[]> {
    return this.http.get<Meal[]>(this.mealsUrl).pipe(
      catchError(this.handleError<Meal[]>('getMeals', []))
    );
  }

  constructor(private http: HttpClient) { }
}
