import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserEnquiryService {

  private apiUrl = "http://localhost:3000";
  constructor(private http: HttpClient) { }

  postData(data: any): Observable<any> {
    const url = `${this.apiUrl}/user/userEnquiry`;
    return this.http.post(url, data);
  }

}
