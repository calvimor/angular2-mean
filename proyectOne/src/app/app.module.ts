import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {InitComponent} from './init.component';
import {PageNotFoundComponent} from './notfound/page.not.found.component';
//input 
import {InputComponent} from './input/input.component';

//pipes
import { ConversorPipe } from './pipes/conversor.pipe';

//directivas
import { HighlightDirective } from './directives/highlight.directive';
import { GigantDirective } from './directives/gigant.directive';

//DI services
import { TicketService } from './services/ticket.service';

//FORMS
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//NGRx
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './services/counter';

//router

import { RouterModule, Routes } from '@angular/router';
import { APPROUTER } from './commons/router';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    ConversorPipe,
    HighlightDirective,
    GigantDirective,
    InitComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    StoreModule.provideStore({ counter: counterReducer }),
    RouterModule.forRoot(APPROUTER)
  ],
  providers: [TicketService],
  bootstrap: [InitComponent]
})
export class AppModule { }
