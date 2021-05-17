import {inject, TestBed, waitForAsync} from '@angular/core/testing';

import {DataService} from './data.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('DataService', () => {
  let service: DataService;
  let http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(DataService);
    http = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch tweets as observable', waitForAsync(inject([HttpTestingController],
    (httpClient: HttpTestingController) => {
      const fakeTweets = [
        {
          title: 'test',
          id: 1,
        },
        {
          id: 2,
          title: 'qui est esse',
        }
      ];

      service.getTweets().subscribe((tweets: any) => {
        expect(tweets.length).toBe(2);
      });

      const req = http.expectOne('https://adrianwii.pl/api/tweets?count=6');
      expect(req.request.method).toBe('GET');

      req.flush(fakeTweets);
      http.verify();
    })));
});
