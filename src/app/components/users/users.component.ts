import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
import {Store} from "@ngrx/store";
import {State} from "../../stage-management/state/main.state";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  userList: Array<Object>;

  constructor(private uS: UserService, private store:Store<State>) {
    uS.getUser();
    store.select('userReducer')
      .subscribe((state) => {
        this.userList = state['userList'];
        console.log('dentro user', this.userList);
      })

  }



  ngOnInit() {
  }

}
