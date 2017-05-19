import { Injectable } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from "angularfire2";
import {Store} from "@ngrx/store";
import {State} from "../stage-management/state/main.state";
import {ActionsMessage} from "../stage-management/actions/message.actions";

@Injectable()
export class MessagesService {

  messagesList: FirebaseListObservable<any[]>;

  constructor(private store: Store<State>, db: AngularFireDatabase) {
    this.messagesList = db.list('/messages');
    console.log('mensajes', this.messagesList);
    // this.messagesList.subscribe((messageGeted) => {
    //   // this.
    // })

    this.messagesList.subscribe((messages) => {
      this.store.dispatch({type: ActionsMessage.INSERT_MESSAGE, payload: messages});
    })
    // this.store.dispatch({type: ActionsMessage.GET_MESSAGES, payload: { this.messagesList }});
  }

  pushMessage(message) {
    this.messagesList.push(message);
  }
}
