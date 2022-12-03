import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesService } from '../games.service';

@Component({
  selector: 'app-sortby',
  templateUrl: './sortby.component.html',
  styleUrls: ['./sortby.component.css']
})
export class SortbyComponent implements OnInit {

  constructor(private _ActivatedRoute:ActivatedRoute, private _GamesService:GamesService) { }

  ngOnInit(): void {
    this.getGamesSorted();
  }


  sortName: string = '';
  gamesSorted: any[] = [];

  getGamesSorted() {

    this._ActivatedRoute.params.subscribe(
      (params: any) => {
        this.sortName = params['name'];
        console.log(this.sortName);
        this._GamesService.getSortedGames(this.sortName).subscribe({
          next: (res) => {
            this.gamesSorted = res;
            console.log(this.gamesSorted);
          }
        })
      }
    );

  };

}
