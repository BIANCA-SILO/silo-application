import { Routes } from '@angular/router';
import { Home } from './home/home';
import { FruitShakes } from './fruit-shakes/fruit-shakes';
import { Desserts } from './desserts/desserts';

export const routes: Routes = [
    //Routes array includes: (path and component)
    //Page (localhost:port/home)
    {path: 'home', component: Home},
    //Page (localhost:port/shakes)
    {path: 'shakes', component: FruitShakes},
    //Page (localhost:port/desserts)
    {path: 'desserts', component: Desserts},
    //Default Redirect (localhost:port/ )
    {path:'', redirectTo:'home', pathMatch:'full'}
];
