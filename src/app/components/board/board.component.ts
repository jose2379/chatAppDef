import { Component, OnInit } from '@angular/core';
import {State} from "../../stage-management/state/main.state";
import {Store} from "@ngrx/store";
import {Mensaje} from "../mensaje.interface";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  listaMensajes:Array<Mensaje>;
  currentUser:string;

  constructor(private store:Store<State>) {
    this.currentUser = 'jose';
    store.select('messageReducer')
      .subscribe((state) => {
        this.listaMensajes = state['messagesList'];
        console.log('dentro', this.listaMensajes);
      })
  }

  ngOnInit() {
  }

}
