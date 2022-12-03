import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private _HttpClient: HttpClient) { }

  games: any[] = [];
  BASE_URL: string = 'https://routeegypt.herokuapp.com/';

  headers = {
    'X-RapidAPI-Key': 'b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
  }

  getAllGames(): Observable<any> {
    return this._HttpClient.get('https://free-to-play-games-database.p.rapidapi.com/api/games', { headers: this.headers })
  }

  getGameDetails(gameId: number): Observable<any> {
    return this._HttpClient.get('https://free-to-play-games-database.p.rapidapi.com/api/game', {
      headers: { 
        'X-RapidAPI-Key': 'b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'    
      },
      params: { id: gameId }
    })
  }

  getGamesByCategory(category:string): Observable<any> {
    return this._HttpClient.get('https://free-to-play-games-database.p.rapidapi.com/api/games', { 
      headers: { 
        'X-RapidAPI-Key': 'b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'    
      },
      params: { category: category }

    })
  }

  getGamesByPlatform(platform:string): Observable<any> {
    return this._HttpClient.get('https://free-to-play-games-database.p.rapidapi.com/api/games', { 
      headers: { 
        'X-RapidAPI-Key': 'b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'    
      },
      params: { platform: platform }

    })
  }

  getSortedGames(sortby:string): Observable<any> {
    return this._HttpClient.get('https://free-to-play-games-database.p.rapidapi.com/api/games', { 
      headers: { 
        'X-RapidAPI-Key': 'b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'    
      },
      params: { 'sort-by': sortby }

    })
  }
}