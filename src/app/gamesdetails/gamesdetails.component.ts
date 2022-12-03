import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { GamesService } from '../games.service';

@Component({
  selector: 'app-gamesdetails',
  templateUrl: './gamesdetails.component.html',
  styleUrls: ['./gamesdetails.component.css']
})
export class GamesdetailsComponent implements OnInit {

  customOptions: OwlOptions = {
    loop: true,
    autoplay:true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
  
  gameId:number =0;
  gameDetailesData :any;
  screenshots :any[]=[];
  

  constructor(private _ActivatedRoute:ActivatedRoute, private _GamesService:GamesService) { }

  ngOnInit(): void {
    this.getGame();
  }

  getGame(){
    this.gameId = this._ActivatedRoute.snapshot.params['id'];
    this._GamesService.getGameDetails(this.gameId).subscribe({
      next : (res)=>{
        this.gameDetailesData = res;
        this.screenshots = this.gameDetailesData.screenshots;
        console.log(this.gameDetailesData);
      }
    })
  }
}
