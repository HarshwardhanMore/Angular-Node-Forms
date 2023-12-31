import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnterpriseEnquiryService {

  constructor(private httpClient: HttpClient) { 
  }
  

  saveEnterpriseEnquiry(inputData: object){

    return this.httpClient.post(`http://localhost:3000/user/enterpriseEnquiry`, inputData);
  }

}
