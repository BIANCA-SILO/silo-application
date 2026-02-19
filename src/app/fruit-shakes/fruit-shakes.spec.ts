import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitShakes } from './fruit-shakes';

describe('FruitShakes', () => {
  let component: FruitShakes;
  let fixture: ComponentFixture<FruitShakes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FruitShakes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FruitShakes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
