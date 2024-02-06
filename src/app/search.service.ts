import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { debounceTime } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private http: HttpClient) {}

  getSearchResults(searchString: string) {
    return this.http
      .get('https://api.github.com/search/users', {
        params: {
          q: searchString,
          per_page: 50,
        },
      })
      .pipe(debounceTime(500));
  }

  getResults() {
    return this.http.get('https://api.github.com/users', {
      params: {
        per_page: 50,
      },
    });
  }
}
