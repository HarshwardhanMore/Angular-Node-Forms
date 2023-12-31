import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserEnquiryService {

  constructor(private httpClient: HttpClient) { 
  }
  

  saveUserEnquiry(inputData: object){

    return this.httpClient.post(`http://localhost:3000/user/userEnquiry`, inputData);
  }
}
