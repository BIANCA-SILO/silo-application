import { Component, signal } from '@angular/core';
import { FruitShakes } from '../fruit-shakes/fruit-shakes';
import { Desserts } from '../desserts/desserts';

@Component({
  selector: 'app-home',
  imports: [FruitShakes, Desserts],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
 home = signal([
  {name: "Dessert", description: "Dessert is a sweet, often rich course concluding a meal, featuring ingredients like sugar, fruit, chocolate, cream, or nuts. Served in various forms—baked (cakes, pies), fried, frozen (ice cream), or chilled (puddings, custards)—it serves as a satisfying finale. Descriptions often highlight textures (fluffy, creamy) and flavors (decadent, rich)."},
  {name: "Fruit Shake", description: "A fruit shake is a refreshing, thick, and creamy beverage made by blending fresh or frozen fruit with a liquid base (such as milk, yogurt, or juice) and ice. It is a versatile, nutrient-packed drink often enjoyed as a healthy breakfast, a quick snack, or a post-workout, energy-boosting treat. "}
 ])
}
