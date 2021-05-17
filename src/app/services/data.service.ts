import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
  }

  getTweets(): Observable<any> {
    return this.http.get<Observable<any>>(`https://adrianwii.pl/api/tweets?count=6`);
  }
}
