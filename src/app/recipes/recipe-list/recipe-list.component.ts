import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A test Recipe', 'A test description', 'https://us.123rf.com/450wm/solomonjee/solomonjee1509/solomonjee150900035/46042652-indian-idly-with-chutney-and-sambar-fresh-steamed-indian-idly-idli-rice-cake-arranged-on-a-tradition.jpg?ver=6'),
    new Recipe('Another test Recipe', 'Another test description', 'https://us.123rf.com/450wm/solomonjee/solomonjee1509/solomonjee150900035/46042652-indian-idly-with-chutney-and-sambar-fresh-steamed-indian-idly-idli-rice-cake-arranged-on-a-tradition.jpg?ver=6')
  ];
  constructor() { }

  ngOnInit() {
  }

}
