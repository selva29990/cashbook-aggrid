import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AggridService {

  endpoint = 'https://www.ag-grid.com/example-assets/row-data.json';

  constructor(private httpClient: HttpClient) { }

  getData() {
    return this.httpClient.get<any[]>(this.endpoint).pipe(catchError(this.handleError));
  }

  handleError(httpError: HttpErrorResponse) {
    let message = 'Something went wrong !';
    console.log(message + httpError);
    if(httpError.status === 404) {
      console.log("Please update your endpoint");
    } else if(httpError.status === 500) {
      console.log("Service is down, please try again later");
    } else {
      console.log(message);
    }
    return message;
  }
}
