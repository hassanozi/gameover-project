import { Component, OnInit } from '@angular/core';
import { GamesService } from '../games.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-platforms',
  templateUrl: './platforms.component.html',
  styleUrls: ['./platforms.component.css']
})
export class PlatformsComponent implements OnInit {

  constructor(private _GamesService: GamesService, private _ActivatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getGamesPlatForm();
  }

  platname: string = '';
  gamesPlatForm: any[] = [];

  getGamesPlatForm() {

    this._ActivatedRoute.params.subscribe(
      (params: any) => {
        this.platname = params['name'];
        this._GamesService.getGamesByPlatform(this.platname).subscribe({
          next: (res) => {
            this.gamesPlatForm = res;
            console.log(this.gamesPlatForm);
          }
        })
      }
    );

  };


}

