import { Component, OnInit } from '@angular/core';
import { GamesService } from '../games.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {

  constructor(private _GamesService:GamesService) { }

  ngOnInit(): void {
    this.getAlldGames();
  }

  allGames:any[]=[];

  getAlldGames()
  {
    this._GamesService.getAllGames().subscribe({
      next :(res) =>{
        this.allGames = res;
        console.log(this.allGames);
      }, error:(err)=>{
        console.log(err);
      }
    })
  }



}
