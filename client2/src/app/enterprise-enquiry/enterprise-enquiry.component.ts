import { EnterpriseEnquiryService } from '../Services/enterprise-enquiry.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-enterprise-enquiry',
  templateUrl: './enterprise-enquiry.component.html',
  styleUrls: ['./enterprise-enquiry.component.css']
})

export class EnterpriseEnquiryComponent {

  constructor(private enterpriseEnquiryService:EnterpriseEnquiryService){}
  
  first_name!: string
  last_name!: string
  address_line!: string
  city!: string
  state!: string
  postal_code!: string
  country!: string
  phone_number!: number
  business_email!: string
  job_type!: string
  enterprise_type!: string
  enterprise_description!: string
  message!: string

  saveEnterpriseEnquiry(){

    var inputData = {
      first_name: this.first_name,
      last_name: this.last_name,
      address_line: this.address_line,
      city: this.city,
      state: this.state,
      postal_code: this.postal_code,
      country: this.country,
      phone_number: this.phone_number,
      business_email: this.business_email,
      job_type: this.job_type,
      enterprise_type: this.enterprise_type,
      enterprise_description: this.enterprise_description,
      message: this.message,
    }

    console.log(inputData);

    this.enterpriseEnquiryService.saveEnterpriseEnquiry(inputData).subscribe({
      next: (res:any)=>{
        console.log(res);
      },
      error: (res:any)=>{
        console.log(res);
      }
    });
  }

}