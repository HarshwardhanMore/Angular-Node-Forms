import { UserEnquiryService } from './../Services/UserEnquiry/user-enquiry.service';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
// import { Modal } from 'flowbite';

// import { Modal } from 'flowbite';
// import type { ModalOptions, ModalInterface } from 'flowbite';
// import type { InstanceOptions } from 'flowbite';




@Component({
  selector: 'app-user-enquiry',
  templateUrl: './user-enquiry.component.html',
  styleUrls: ['./user-enquiry.component.css']
})

export class UserEnquiryComponent {

  userEnquiryObj:any = {
    first_name: '',
    last_name: '',
    address_line: '',
    city: '',
    state: '',
    postal_code: '',
    country: '',
    email: '',
    phone_number: '',
    industry: '',
    message: '',
  }

  userEnquiryForm: FormGroup = new FormGroup({
    first_name: new FormControl('', [Validators.required]),
    last_name: new FormControl('', [Validators.required]),
    address_line: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    state: new FormControl('', [Validators.required]),
    postal_code: new FormControl('', [Validators.required, Validators.pattern(/^\d{6}$/)]),
    country: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.pattern(/^\S+@\S+\.\S+$/)]),
    // phone_number: new FormControl('', [Validators.required, Validators.pattern(/^\d{10}$/)]),
    phone_number: new FormControl('', [Validators.required, Validators.pattern(/^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/)]),
    industry: new FormControl(''),
    message: new FormControl('', [Validators.required]),
    checkbox: new FormControl(false),
  })

  constructor(private http: HttpClient, private renderer: Renderer2, private userEnquiryService: UserEnquiryService, private router: Router){

  }

  
  clearForm() {
    this.userEnquiryForm.reset({
      first_name: '',
      last_name: '',
      address_line: '',
      city: '',
      state: '',
      postal_code: '',
      country: '',
      phone_number: '',
      business_email: '',
      enterprise_name: '',
      enterprise_description: '',
      website_link: '',
      message: '',
      checkbox: false
     });
  }

  onSubmitUserEnquiry() {
    
    if (this.userEnquiryForm.valid) {
      const data = this.userEnquiryForm.value;
      this.userEnquiryService.postData(data).subscribe(
        
      (response:any) => {
        console.log('User Enquiry posted successfully:', response);
        this.clearForm();
        // this.router.navigate(['/']);
      },
      (error:any)=>{
        console.log('error '+error.message);
      }
      );
    } else {
      this.userEnquiryForm.markAllAsTouched();
    }
  }



}
