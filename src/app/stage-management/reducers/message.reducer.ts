
import {Action, ActionReducer} from "@ngrx/store";
import {initialStage, State} from "../state/main.state";
import {ActionsMessage} from "../actions/message.actions";

export const messageReducer: ActionReducer<State> = (state = initialStage, action: Action) => {
  console.log("hola");
  switch (action.type) {
    case ActionsMessage.INSERT_MESSAGE:{
      let arrTemp = state.messagesList;
      arrTemp.push(action.payload['message']);
      state.messagesList = arrTemp;
      return state;
    }
    default: {
      return state;
    }
  }
}
