import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  userPlat = new BehaviorSubject(null);
  userCat = new BehaviorSubject(null);
  userSort = new BehaviorSubject(null);
  isLogin :boolean = false;

  constructor(private _AuthService:AuthService) { }

  platform:any[]=[
   {platid:1, platname :'pc'},
   {platid:2, platname :'browser'}
  ]

  sort:any[]=[
    {sortid:1, sortname :'release-date'},
    {sortid:2, sortname :'popularity'},
    {sortid:1, sortname :'alphabetical'},
    {sortid:2, sortname :'relevance'}
   ]

   category:any[]=[
    {catid:1, catname :'racing'},
    {catid:2, catname :'sports'},
    {catid:3, catname :'social'},
    {catid:4, catname :'shooter'},
    {catid:5, catname :'open world'},
    {catid:6, catname :'zombie'},
    {catid:7, catname :'fantasy'},
    {catid:8, catname :'action-rpg'},
    {catid:9, catname :'action'},
    {catid:10, catname :'flight'},
    {catid:11, catname :'battel-royal'}
   ]


  ngOnInit(): void {
    this._AuthService.userData.subscribe({
      next: (res)=>{
        if (this._AuthService.userData.getValue() !== null) {
          this.isLogin = true;
        }
        else{
          this.isLogin = false;
        }
      }
    })
  }

  logout()
  {
    this._AuthService.logout();
  }


  selectPlatform(p:any){
    console.log(p);
    this.userPlat.next(p.platname)
  }

  selectSort(s:any){
    console.log(s);
    this.userSort.next(s.sortname)
  }

  selectCategory(c:any){
    console.log(c);
    this.userCat.next(c.catname);
  }
}
