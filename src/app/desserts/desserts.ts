import { Component } from '@angular/core';

@Component({
  selector: 'app-desserts',
  imports: [],
  templateUrl: './desserts.html',
  styleUrl: './desserts.css',
})
export class Desserts {
Desserts = [

{name:'Strawberry Cheesecake', Ingredients:'full-fat cream cheese, sugar, eggs, sour cream, fresh or frozen strawberries, butter, vanilla extract.', Calories:'320'}, 
{name:'Carrot Cake', Ingredients:'grated carrots, all-purpose flour, vegetable oil, eggs, a combination of white and brown sugars', Calories:'350'},
{name:'Chocolate Cake', Ingredients:'all-purpose flour, granulated sugar, unsweetened cocoa powder, baking soda, baking powder, salt, eggs, milk, oil, vanilla extract, hot water or coffee.', Calories:'370'}
] 
}
