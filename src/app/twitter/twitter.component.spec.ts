import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TwitterComponent} from './twitter.component';

describe('TwitterComponent', () => {
  let component: TwitterComponent;
  let fixture: ComponentFixture<TwitterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TwitterComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change title after btn click', () => {
    component.onBtnClick();
    expect(component.tweet).toEqual('Hi I\'m clicked!');
  });

  it('should set tweet value', () => {
    component.tweet = 'sialala';
    expect(component.tweet).toEqual('sialala');
  });

  it('should reset tweet value', () => {
    // component.onBtnClick();
    spyOn(component, 'setTweetValue').withArgs('sialala');
    component.onReset();
    expect(component.tweet).toEqual('Tweet');
  });
});
