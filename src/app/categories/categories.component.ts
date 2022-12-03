import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesService } from '../games.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor(private _ActivatedRoute :ActivatedRoute, private _GamesService:GamesService) { }

  ngOnInit(): void {
    this.getGamesCategory()
  }


  categoryName: string = '';
  gamesCategories: any[] = [];

  getGamesCategory() {

    this._ActivatedRoute.params.subscribe(
      (params: any) => {
        this.categoryName = params['name'];
        console.log(this.categoryName);
        this._GamesService.getGamesByCategory(this.categoryName).subscribe({
          next: (res) => {
            this.gamesCategories = res;
            console.log(this.gamesCategories);
          }
        })
      }
    );

  };
}
