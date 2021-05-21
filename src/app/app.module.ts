import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TwitterComponent } from './twitter/twitter.component';
import {HttpClientModule} from '@angular/common/http';
import { AddTweetComponent } from './add-tweet/add-tweet.component';
import {ReactiveFormsModule} from '@angular/forms';
import { PowerPipe } from './pipes/power.pipe';
import { LastPipe } from './pipes/last.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TwitterComponent,
    AddTweetComponent,
    PowerPipe,
    LastPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
