/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoffeesComponent } from './coffees.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { CoffeeListComponent } from './coffee-list/coffee-list.component';
import { Coffee } from '../../shared/models/coffee';
import { faker } from '@faker-js/faker';
import { CoffeeService } from './services/coffee.service';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

describe('CoffeeListComponent', () => {
  let component: CoffeesComponent;
  let fixture: ComponentFixture<CoffeesComponent>;
  let coffees: Coffee[] = [];
  let coffeeService: CoffeeService;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [CoffeesComponent, CoffeeListComponent],
      providers: [CoffeeService, provideHttpClient(), provideHttpClientTesting()]
    })
      .compileComponents();
  });

  beforeEach(() => {
    coffeeService = TestBed.inject(CoffeeService);

    for (let i = 0; i < 5; i++) {
      coffees.push({
        id: i + 1,
        nombre: `Coffee ${i + 1}`,
        tipo: [0, 3, 4].includes(i) ? 'Café de Origen' : 'Blend',
        altura: faker.number.int(),
        region: faker.location.city(),
        imagen: faker.image.url(),
        sabor: faker.lorem.words(5)
      })
    }

    spyOn(coffeeService, 'getCoffees').and.returnValue(of(coffees));

    fixture = TestBed.createComponent(CoffeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    coffees = [];
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should render coffees table", () => {
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('table')).toBeTruthy();
  })

  it("should calculate correctly number of coffees of type blend", () => {
    expect(fixture.componentInstance.blendTypeCount).toEqual(2);
  })

  it("should calculate correctly number of coffees of type origin", () => {
    expect(fixture.componentInstance.originTypeCount).toEqual(3);
  })

  it("should render number of coffees of type blend", () => {
    const debugElement = fixture.debugElement;
    const paragraphs = debugElement.queryAll(By.css('p'));
    const blendTypeParagraph = paragraphs.find(p =>
      p.nativeElement.textContent.includes('Total café blend')
    );

    expect(blendTypeParagraph?.nativeElement.textContent).toContain('2');
  });

  it("should render number of coffees of type origin", () => {
    const debugElement = fixture.debugElement;
    const paragraphs = debugElement.queryAll(By.css('p'));
    const originTypeParagraph = paragraphs.find(p =>
      p.nativeElement.textContent.includes('Total café de origen')
    );

    expect(originTypeParagraph?.nativeElement.textContent).toContain('3');
  });
});
