import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {State} from "../../stage-management/state/main.state";
import {ActionsMessage} from "../../stage-management/actions/message.actions";
import {Mensaje} from "../mensaje.interface";
import {MessagesService} from "../../services/messages.service";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  mensaje: string;
  userName:string;

  // constructor(private store:Store<State>) {
  //   store.select('messageReducer')
  // }
  constructor(private uS: MessagesService) {
    // store.select('messageReducer')
  }

  ngOnInit() {
    this.mensaje = '';
    this.userName = '';
  }

  enviamosTexto(){
    if(this.userName == ''){
      console.log('Debes añadir un Usuario')
    } else if(this.mensaje == ''){
      console.log('Debes añadir un Mensaje')
    } else {
      let messageSend:Mensaje = {
        username: this.userName,
        message: this.mensaje
      };

      this.uS.pushMessage(messageSend);

      // this.store.dispatch({type: ActionsMessage.INSERT_MESSAGE, payload: { message: { messageSend }}});
      this.mensaje = '';
      this.userName = '';
    }
  }

}
