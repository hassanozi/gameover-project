import { Component, OnInit } from '@angular/core';
import { GamesService } from '../games.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _GamesService:GamesService) { }

  ngOnInit(): void {
    this.getRecommendedGames();
  }

  recommenedGames:any[]=[];

  getRecommendedGames()
  {
    this._GamesService.getAllGames().subscribe({
      next :(res) =>{
        this.recommenedGames = res;
        console.log(this.recommenedGames);
      }, error:(err)=>{
        console.log(err);
      }
    })
  }
}
