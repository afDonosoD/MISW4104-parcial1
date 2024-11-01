import { Component, OnInit } from '@angular/core';
import { CoffeeService } from './services/coffee.service';
import { Coffee } from '../../shared/models/coffee';

@Component({
  selector: 'app-coffees',
  templateUrl: './coffees.component.html',
  styleUrls: ['./coffees.component.css']
})
export class CoffeesComponent implements OnInit {
  coffees: Coffee[] = [];
  originTypeCount = 0;
  blendTypeCount = 0;

  constructor(private readonly coffeeService: CoffeeService) { }

  ngOnInit() {
    this.getCoffees();
  }

  getCoffees() {
    this.coffeeService.getCoffees().subscribe(coffees => {
      this.coffees = coffees;
      this.originTypeCount = coffees.filter(c => c.tipo === 'Café de Origen').length;
      this.blendTypeCount = coffees.filter(c => c.tipo === 'Blend').length;
    });
  }
}
