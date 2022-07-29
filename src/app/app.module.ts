import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';

///importamod la configuracion de firebase

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ViewComponent } from './container/default/view.component';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NameTypePipe } from './container/pipes/name-type.pipe';
import { exit } from './container/exits/exit';


@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    NameTypePipe,
    exit
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModalModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
