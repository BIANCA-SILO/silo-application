import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-fruit-shakes',
  imports: [],
  templateUrl: './fruit-shakes.html',
  styleUrl: './fruit-shakes.css',
})
export class FruitShakes {
shake = signal([

{name:'Mango', Ingredients:'1-2 ripe mangoes (diced), 1 cup chilled milk, 1-2 tablespoons sweetener, ice cubes', Calories:'350'},
{name:'Strawberry', Ingredients: 'Fresh or frozen strawberries, vanilla ice cream, milk, sugar, vanilla extract)', Calories:'300'},
{name:'Avocado', Ingredients: '1–2 ripe avocados, 1 cup of milk, sweetener, 1 tsp of lime juice, ice cubes', Calories:'300'}
])
}
