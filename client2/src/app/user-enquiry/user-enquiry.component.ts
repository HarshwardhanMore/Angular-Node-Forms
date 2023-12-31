import { UserEnquiryService } from './../Services/user-enquiry.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-enquiry',
  templateUrl: './user-enquiry.component.html',
  styleUrls: ['./user-enquiry.component.css']
})

export class UserEnquiryComponent {

  constructor(private userEnquiryService:UserEnquiryService){}
  
  first_name!: string
  last_name!: string
  address_line!: string
  city!: string
  state!: string
  postal_code!: string
  country!: string
  email!: string
  phone_number!: number
  industry!: string
  message!: string

  saveUserEnquiry(){

    var inputData = {
      first_name: this.first_name,
      last_name: this.last_name,
      address_line: this.address_line,
      city: this.city,
      state: this.state,
      postal_code: this.postal_code,
      country: this.country,
      email: this.email,
      phone_number: this.phone_number,
      industry: this.industry,
      message: this.message,
    }

    console.log(inputData);

    this.userEnquiryService.saveUserEnquiry(inputData).subscribe({
      next: (res:any)=>{
        console.log(res);
      },
      error: (res:any)=>{
        console.log(res);
      }
    });
  }

}