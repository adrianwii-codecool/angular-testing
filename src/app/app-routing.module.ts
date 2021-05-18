import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddTweetComponent} from './add-tweet/add-tweet.component';
import {TwitterComponent} from './twitter/twitter.component';

const routes: Routes = [
  {path : '', component: TwitterComponent},
  {path : 'add', component: AddTweetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
