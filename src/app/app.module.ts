import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BoardComponent } from './components/board/board.component';
import { ChatComponent } from './components/chat/chat.component';
import { UsersComponent } from './components/users/users.component';
import {StoreModule} from "@ngrx/store";
import {messageReducer} from "./stage-management/reducers/message.reducer";
import {userReducer} from "./stage-management/reducers/user.reducer";

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    ChatComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore({messageReducer, userReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
