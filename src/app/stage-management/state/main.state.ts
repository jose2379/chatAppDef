import {Mensaje} from "../../components/mensaje.interface";
export interface State{
  messagesList: Array<Mensaje>;
  userList: Array<any>;
}

export const initialStage: State = {
  messagesList: [],
  userList: []
};
