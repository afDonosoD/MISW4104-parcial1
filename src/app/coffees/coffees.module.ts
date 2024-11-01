import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoffeesComponent } from './coffees.component';
import { CoffeeService } from './services/coffee.service';
import { CoffeeListComponent } from './coffee-list/coffee-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CoffeesComponent, CoffeeListComponent],
  providers: [CoffeeService],
  exports: [CoffeesComponent]
})
export class CoffeesModule { }
