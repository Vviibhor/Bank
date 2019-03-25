import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SideComponent } from './side/side.component';
import { TopbarComponent } from './topbar/topbar.component';
import { TopComponent } from './top/top.component';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { ListuserComponent } from './listuser/listuser.component';

@NgModule({
  declarations: [
    AppComponent,
    SideComponent,
    TopbarComponent,
    TopComponent,
    MyaccountComponent,
    ListuserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
