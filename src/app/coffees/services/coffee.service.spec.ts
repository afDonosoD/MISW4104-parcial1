/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { CoffeeService } from './coffee.service';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('Service: Coffee', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoffeeService, provideHttpClient(), provideHttpClientTesting()]
    });
  });

  it('should ...', inject([CoffeeService], (service: CoffeeService) => {
    expect(service).toBeTruthy();
  }));
});
