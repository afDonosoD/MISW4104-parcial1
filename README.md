# MISW4104 Parcial1

## Arquitectura

Los componentes y servicios de la aplicación se encuentran en `/app`. Dentro se encuentra el módulo para Cafés, el cual contiene un componente principal [coffees.component.ts](src/app/coffees/coffees.component.ts) que se encarga de llamar al componente que reenderiza la tabla de cafés, al igual que mostrar la cantidad de cada tipo de café. Este componente también se encarga de llamar al servicio de `CoffeeService` y pasar el resultado al componente de `CoffeeList`.

Dentro de coffees se encuentra una carpeta `services`, la cual contiene todos los servicios del módulo.

Por otro lado, en la carpeta `shared/models` se encuentran los modelos utilizados en la aplicación.

## Ambiente Utilizado
- Angular CLI: 18.2.9
- Node: 20.18.0
- Npm: 10.8.2

## Instalar Dependencias
Para instalar las dependencias utiliza el comando `npm install`.

## Servidor Desarrollo

Para correr la aplicación utilice el comando `ng serve`. Este correra en la ruta `localhost:4200`.

## Correr Pruebas Unitarias

Utiliza `ng test` para ejecutar las pruebas utilizando [Karma](https://karma-runner.github.io).