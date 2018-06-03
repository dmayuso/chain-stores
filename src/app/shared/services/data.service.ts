import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import { environment } from '../../../environments/environment';

const apiUrl: string = `${environment.api}`;

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Cache-control': 'no-cache',
    'Pragma': 'no-cache',
    'Expires': '0'
  })
};

@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }

  get(url: string): Observable<any>{
    return this.http.get(apiUrl.concat(url));
  }

  post(url: string, data: any) {
    return this.http.post(apiUrl.concat(url), data, httpOptions);
  }

}
