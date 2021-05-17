import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-twitter',
  templateUrl: './twitter.component.html',
  styleUrls: ['./twitter.component.scss']
})
export class TwitterComponent implements OnInit {

  private _tweet = 'Tweet';

  constructor() {
  }

  ngOnInit(): void {
  }

  get tweet(): string {
    return this._tweet;
  }

  set tweet(value: string) {
    this._tweet = value;
  }

  setTweetValue(value: string): void {
    this._tweet = value;
  }

  onBtnClick(): void {
    this._tweet = 'Hi I\'m clicked!';
  }

  onReset(): void {
    this._tweet = 'Tweet';
  }
}
