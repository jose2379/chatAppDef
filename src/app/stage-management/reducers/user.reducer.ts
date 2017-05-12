
import {Action, ActionReducer} from "@ngrx/store";
import {initialStage, State} from "../state/main.state";
import {ActionsUser} from "../actions/user.actions";

export const userReducer: ActionReducer<State> = (state = initialStage, action: Action) => {
  console.log("hola");
  switch (action.type) {
    case ActionsUser.USER_LIST:{
      let arrTemp = state.userList;
      // arrTemp.push(action.payload['message']);
      state.userList = arrTemp;
      return state;
    }
    default: {
      return state;
    }
  }
}
