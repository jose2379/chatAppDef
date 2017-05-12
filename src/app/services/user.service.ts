import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {State} from "app/stage-management/state/main.state";
import {ActionsUser} from "../stage-management/actions/user.actions";

@Injectable()
export class UserService {

  constructor(private http: Http, private store: Store<State>) {
    store.select('userReducer')
  }

  getUser(): void{
    this.http.get('https://randomuser.me/api/?results=10')
      .subscribe(users => {
        this.userGetting(users);
      });
  }
  userGetting(res: Response){
    console.log('dentro', res);
    this.store.dispatch({type: ActionsUser.USER_LIST, payload: { res: res.json() }});
  }

}
