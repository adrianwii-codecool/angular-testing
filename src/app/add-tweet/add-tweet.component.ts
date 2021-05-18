import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-add-tweet',
  templateUrl: './add-tweet.component.html',
  styleUrls: ['./add-tweet.component.scss']
})
export class AddTweetComponent implements OnInit {

  form: FormGroup;
  tweet = {
    title: '',
    date: new Date()
  };

  constructor() {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl(),
      date: new FormControl()
    });
  }

  onSubmit({value, valid}: { value: any, valid: boolean }): void {
    console.log(value);

    this.tweet = value;
  }
}
