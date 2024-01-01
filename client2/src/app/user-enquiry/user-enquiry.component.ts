import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Renderer2 } from '@angular/core';
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
    industry: new FormControl('', [Validators.required]),
    message: new FormControl('', [Validators.required]),
  })

  constructor(private http: HttpClient, private renderer: Renderer2){

  }


  onSubmitUserEnquiry(){
    
    if (this.userEnquiryForm.valid) {
      const url = "http://localhost:3000/user/userEnquiry";
      const data = this.userEnquiryForm.value;
      console.log(data);
      this.http.post(url, data).subscribe((res: any)=>{
        console.log("Form Submitted Successfully");
      });






      // const $modalElement: HTMLElement = document.getElementById('modalEl');

      // const modalOptions: ModalOptions = {
      //     placement: 'bottom-right',
      //     backdrop: 'dynamic',
      //     backdropClasses:
      //         'bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40',
      //     closable: true,
      //     onHide: () => {
      //         console.log('modal is hidden');
      //     },
      //     onShow: () => {
      //         console.log('modal is shown');
      //     },
      //     onToggle: () => {
      //         console.log('modal has been toggled');
      //     },
      // };

      // // instance options object
      // const instanceOptions: InstanceOptions = {
      //   id: 'modalEl',
      //   override: true
      // };

      // const modal: ModalInterface = new Modal($modalElement, modalOptions, instanceOptions);

      // modal.toggle();

      
      // modal = new Modal(document.getElementById('user-enquiry'));
      // modal.toggle();

    } else {
      this.userEnquiryForm.markAllAsTouched();
    }
  }

}

// import { HttpClient } from '@angular/common/http';
// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// @Component({
//     selector: 'app-user-enquiry',
//     templateUrl: './user-enquiry.component.html',
//     styleUrls: ['./user-enquiry.component.css']
// })
// export class UserEnquiryComponent implements OnInit {
//   title = 'client';
//   apiUrl = 'http://localhost:3000/user/userEnquiry';

//   userEnquiryForm: FormGroup = new FormGroup({

//   });  // Add this line to declare the form

//   constructor(private http: HttpClient, private fb: FormBuilder) {}

//   ngOnInit(): void {
//     // Initialize the form in the ngOnInit lifecycle hook
//     this.userEnquiryForm = this.fb.group({
//       first_name: ['', Validators.required],
//       last_name: ['', Validators.required],
//       address_line: ['', Validators.required],
//       city: ['', Validators.required],
//       state: ['', Validators.required],
//       postal_code: [null, Validators.required],
//       country: ['', Validators.required],
//       email: ['', [Validators.required, Validators.email]],
//       phone_number: [null, Validators.required],
//       industry: ['', Validators.required],
//       message: ['', Validators.required]
//     });
//   }

//   onSubmitUserEnquiry(): void {
//     const formData = this.userEnquiryForm.value;
//     console.log(formData);

//     // this.http.post(this.apiUrl, formData).subscribe(
//     //   (response: any) => {
//     //     console.log('Form data sent successfully', response);
//     //     // Handle the response as needed
//     //   },
//     //   (error: any) => {
//     //     console.error('Error sending form data', error);
//     //     // Handle the error as needed
//     //   }
//     // );
//   }
// }
