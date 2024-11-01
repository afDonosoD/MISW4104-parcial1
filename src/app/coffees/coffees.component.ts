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

  constructor(private readonly coffeeService: CoffeeService) { }

  ngOnInit() {
    this.getCoffees();
  }

  getCoffees() {
    this.coffeeService.getCoffees().subscribe(coffees => this.coffees = [...coffees, {
      "id": 6,
      "nombre": "Café Especial La Manchuria",
      "tipo": "Blend",
      "region": "Salgar, Antioquia",
      "sabor": "Vino, Notas dulces, Frutos rojos",
      "altura": 1850,
      "imagen": "https://cdn.shopify.com/s/files/1/0272/2873/3504/products/cafe-especal-manchuria-cafe-colombiano-f_720x.png"
    }, {
      "id": 6,
      "nombre": "Café Especial La Manchuria",
      "tipo": "Blend",
      "region": "Salgar, Antioquia",
      "sabor": "Vino, Notas dulces, Frutos rojos",
      "altura": 1850,
      "imagen": "https://cdn.shopify.com/s/files/1/0272/2873/3504/products/cafe-especal-manchuria-cafe-colombiano-f_720x.png"
    }, {
      "id": 6,
      "nombre": "Café Especial La Manchuria",
      "tipo": "Blend",
      "region": "Salgar, Antioquia",
      "sabor": "Vino, Notas dulces, Frutos rojos",
      "altura": 1850,
      "imagen": "https://cdn.shopify.com/s/files/1/0272/2873/3504/products/cafe-especal-manchuria-cafe-colombiano-f_720x.png"
    }, {
      "id": 6,
      "nombre": "Café Especial La Manchuria",
      "tipo": "Blend",
      "region": "Salgar, Antioquia",
      "sabor": "Vino, Notas dulces, Frutos rojos",
      "altura": 1850,
      "imagen": "https://cdn.shopify.com/s/files/1/0272/2873/3504/products/cafe-especal-manchuria-cafe-colombiano-f_720x.png"
    }, {
      "id": 6,
      "nombre": "Café Especial La Manchuria",
      "tipo": "Blend",
      "region": "Salgar, Antioquia",
      "sabor": "Vino, Notas dulces, Frutos rojos",
      "altura": 1850,
      "imagen": "https://cdn.shopify.com/s/files/1/0272/2873/3504/products/cafe-especal-manchuria-cafe-colombiano-f_720x.png"
    }, {
      "id": 6,
      "nombre": "Café Especial La Manchuria",
      "tipo": "Blend",
      "region": "Salgar, Antioquia",
      "sabor": "Vino, Notas dulces, Frutos rojos",
      "altura": 1850,
      "imagen": "https://cdn.shopify.com/s/files/1/0272/2873/3504/products/cafe-especal-manchuria-cafe-colombiano-f_720x.png"
    }, {
      "id": 6,
      "nombre": "Café Especial La Manchuria",
      "tipo": "Blend",
      "region": "Salgar, Antioquia",
      "sabor": "Vino, Notas dulces, Frutos rojos",
      "altura": 1850,
      "imagen": "https://cdn.shopify.com/s/files/1/0272/2873/3504/products/cafe-especal-manchuria-cafe-colombiano-f_720x.png"
    }, {
      "id": 6,
      "nombre": "Café Especial La Manchuria",
      "tipo": "Blend",
      "region": "Salgar, Antioquia",
      "sabor": "Vino, Notas dulces, Frutos rojos",
      "altura": 1850,
      "imagen": "https://cdn.shopify.com/s/files/1/0272/2873/3504/products/cafe-especal-manchuria-cafe-colombiano-f_720x.png"
    }, {
      "id": 6,
      "nombre": "Café Especial La Manchuria",
      "tipo": "Blend",
      "region": "Salgar, Antioquia",
      "sabor": "Vino, Notas dulces, Frutos rojos",
      "altura": 1850,
      "imagen": "https://cdn.shopify.com/s/files/1/0272/2873/3504/products/cafe-especal-manchuria-cafe-colombiano-f_720x.png"
    }, {
      "id": 6,
      "nombre": "Café Especial La Manchuria",
      "tipo": "Blend",
      "region": "Salgar, Antioquia",
      "sabor": "Vino, Notas dulces, Frutos rojos",
      "altura": 1850,
      "imagen": "https://cdn.shopify.com/s/files/1/0272/2873/3504/products/cafe-especal-manchuria-cafe-colombiano-f_720x.png"
    }, {
      "id": 6,
      "nombre": "Café Especial La Manchuria",
      "tipo": "Blend",
      "region": "Salgar, Antioquia",
      "sabor": "Vino, Notas dulces, Frutos rojos",
      "altura": 1850,
      "imagen": "https://cdn.shopify.com/s/files/1/0272/2873/3504/products/cafe-especal-manchuria-cafe-colombiano-f_720x.png"
    }, {
      "id": 6,
      "nombre": "Café Especial La Manchuria",
      "tipo": "Blend",
      "region": "Salgar, Antioquia",
      "sabor": "Vino, Notas dulces, Frutos rojos",
      "altura": 1850,
      "imagen": "https://cdn.shopify.com/s/files/1/0272/2873/3504/products/cafe-especal-manchuria-cafe-colombiano-f_720x.png"
    }, {
      "id": 6,
      "nombre": "Café Especial La Manchuria",
      "tipo": "Blend",
      "region": "Salgar, Antioquia",
      "sabor": "Vino, Notas dulces, Frutos rojos",
      "altura": 1850,
      "imagen": "https://cdn.shopify.com/s/files/1/0272/2873/3504/products/cafe-especal-manchuria-cafe-colombiano-f_720x.png"
    }, {
      "id": 6,
      "nombre": "Café Especial La Manchuria",
      "tipo": "Blend",
      "region": "Salgar, Antioquia",
      "sabor": "Vino, Notas dulces, Frutos rojos",
      "altura": 1850,
      "imagen": "https://cdn.shopify.com/s/files/1/0272/2873/3504/products/cafe-especal-manchuria-cafe-colombiano-f_720x.png"
    }, {
      "id": 6,
      "nombre": "Café Especial La Manchuria",
      "tipo": "Blend",
      "region": "Salgar, Antioquia",
      "sabor": "Vino, Notas dulces, Frutos rojos",
      "altura": 1850,
      "imagen": "https://cdn.shopify.com/s/files/1/0272/2873/3504/products/cafe-especal-manchuria-cafe-colombiano-f_720x.png"
    }, {
      "id": 6,
      "nombre": "Café Especial La Manchuria",
      "tipo": "Blend",
      "region": "Salgar, Antioquia",
      "sabor": "Vino, Notas dulces, Frutos rojos",
      "altura": 1850,
      "imagen": "https://cdn.shopify.com/s/files/1/0272/2873/3504/products/cafe-especal-manchuria-cafe-colombiano-f_720x.png"
    }, {
      "id": 6,
      "nombre": "Café Especial La Manchuria",
      "tipo": "Blend",
      "region": "Salgar, Antioquia",
      "sabor": "Vino, Notas dulces, Frutos rojos",
      "altura": 1850,
      "imagen": "https://cdn.shopify.com/s/files/1/0272/2873/3504/products/cafe-especal-manchuria-cafe-colombiano-f_720x.png"
    }, {
      "id": 6,
      "nombre": "Café Especial La Manchuria",
      "tipo": "Blend",
      "region": "Salgar, Antioquia",
      "sabor": "Vino, Notas dulces, Frutos rojos",
      "altura": 1850,
      "imagen": "https://cdn.shopify.com/s/files/1/0272/2873/3504/products/cafe-especal-manchuria-cafe-colombiano-f_720x.png"
    },]);
  }
}
