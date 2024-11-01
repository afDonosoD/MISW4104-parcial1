/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeListComponent } from './coffee-list.component';
import { Coffee } from '../../../shared/models/coffee';
import { faker } from '@faker-js/faker';

describe('CoffeeListComponent', () => {
  let component: CoffeeListComponent;
  let fixture: ComponentFixture<CoffeeListComponent>;
  let coffees: Coffee[] = [];

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ CoffeeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeeListComponent);
    component = fixture.componentInstance;

    for (let i = 0; i < 5; i++) {
      coffees.push({
        id: i + 1,
        nombre: `Coffee ${i + 1}`,
        tipo: Math.random() >= 0.5 ? 'Café de Origen' : 'Blend',
        altura: faker.number.int(),
        region: faker.location.city(),
        imagen: faker.image.url(),
        sabor: faker.lorem.words(5)
      })
    }

    component.coffees = coffees;
    fixture.detectChanges();
  });

  afterEach(() => {
    coffees = [];
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should render 5 rows of coffees", () => {
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelectorAll('tbody > tr').length).toBe(5);
  })

  it("should render table header", () => {
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('thead > tr > th:nth-child(1)')?.textContent).toContain('#');
    expect(compiled.querySelector('thead > tr > th:nth-child(2)')?.textContent).toContain('Nombre');
    expect(compiled.querySelector('thead > tr > th:nth-child(3)')?.textContent).toContain('Tipo');
    expect(compiled.querySelector('thead > tr > th:nth-child(4)')?.textContent).toContain('Región');
  })
});
