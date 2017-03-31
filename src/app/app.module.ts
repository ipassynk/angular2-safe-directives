import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {CurrencyPipe, DecimalPipe, PercentPipe} from '@angular/common';

import {AppComponent} from './app.component';
import {SafeNumberPipe, SafeCurrencyPipe, SafePercentPipe} from './pipes';

@NgModule({
  declarations: [
    AppComponent,
    SafeNumberPipe,
    SafeCurrencyPipe,
    SafePercentPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [DecimalPipe, PercentPipe, CurrencyPipe],
  bootstrap: [AppComponent]
})
export class AppModule {
}
