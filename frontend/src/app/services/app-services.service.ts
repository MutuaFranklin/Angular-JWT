import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppServicesService {

  readonly APIUrl = "http://127.0.0.1:8000/";

  constructor(private http: HttpClient) {

  }

  getAllServices():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + 'api/services/')
  }

}
