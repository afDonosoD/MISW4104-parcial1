import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Coffee } from '../../../shared/models/coffee';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {

  constructor(private readonly httpClient: HttpClient) { }

  getCoffees(): Observable<Coffee[]> {
    return this.httpClient.get<Coffee[]>(environment.coffeesUrl);
  }
}
