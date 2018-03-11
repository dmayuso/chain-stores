import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import { environment } from '../../../environments/environment';

const apiUrl: string = `${environment.api}`;

@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }

  get(url: string): Observable<any>{
    return this.http.get(apiUrl.concat(url));
  }

}
