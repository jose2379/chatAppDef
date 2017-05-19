import { Component, OnInit } from '@angular/core';
import {State} from "../../stage-management/state/main.state";
import {Store} from "@ngrx/store";
import {Mensaje} from "../mensaje.interface";
import {AngularFireDatabase, FirebaseListObservable} from "angularfire2/database";
import {MessagesService} from "../../services/messages.service";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  listaMensajes:Array<Mensaje>;
  // listaMensajes: FirebaseListObservable<any[]>;
  currentUser:string;

  constructor(private store:Store<State>) {
    this.currentUser = 'jose';
    store.select('messageReducer')
      .subscribe((state) => {
      console.log(state);
        this.listaMensajes = state['messagesList'];
        console.log('dentro', this.listaMensajes);
      })
  }

  /*constructor(private uS: MessagesService) {

    this.currentUser = 'jose';

    // this.listaMensajes = uS.pushMessage()
    // var array = db.list('/messages');
    // array.subscribe((datos) => {
    //   console.log('datos', datos)
    //   this.listaMensajes = datos;
    //     console.log('lista', this.listaMensajes);
    // });

    // array.push()

    // store.select('messageReducer')
    //   .subscribe((state) => {
    //     this.listaMensajes = state['messagesList'];
    //     console.log('dentro', this.listaMensajes);
    //   })
  }*/

  ngOnInit() {
  }

}
