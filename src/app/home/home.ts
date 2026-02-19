import { Component } from '@angular/core';
import { FruitShakes } from '../fruit-shakes/fruit-shakes';
import { Desserts } from '../desserts/desserts';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
Home = [

{Component: FruitShakes}, 
{Component: Desserts}

]
}
