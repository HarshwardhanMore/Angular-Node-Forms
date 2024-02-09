import { UserEnquiryService } from './../Services/UserEnquiry/user-enquiry.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
// import { Modal } from 'flowbite';

// import { Modal } from 'flowbite';
// import type { ModalOptions, ModalInterface } from 'flowbite';
// import type { InstanceOptions } from 'flowbite';

import { Country, State, City } from 'country-state-city';

@Component({
  selector: 'app-user-enquiry',
  templateUrl: './user-enquiry.component.html',
  styleUrls: ['./user-enquiry.component.css'],
})
export class UserEnquiryComponent implements OnInit {
  userEnquiryObj: any = {
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
  };

  userEnquiryForm: FormGroup = new FormGroup({
    first_name: new FormControl('', [Validators.required]),
    last_name: new FormControl('', [Validators.required]),
    address_line: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    state: new FormControl('', [Validators.required]),
    postal_code: new FormControl('', [
      Validators.required,
      Validators.pattern(/^\d{6}$/),
    ]),
    country: new FormControl('', [Validators.required]),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern(/^\S+@\S+\.\S+$/),
    ]),
    // phone_number: new FormControl('', [Validators.required, Validators.pattern(/^\d{10}$/)]),
    phone_number: new FormControl('', [
      Validators.required,
      Validators.pattern(
        /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/
      ),
    ]),
    industry: new FormControl(''),
    message: new FormControl('', [Validators.required]),
    checkbox: new FormControl(false),
  });

  countries = Country.getAllCountries();
  // states = State.getAllStates();
  states: any[] = [];
  cities: any[] = [];

  stateDisabled: Boolean = true;
  cityDisabled: Boolean = true;

  ngOnInit() {
    const countryControl = this.userEnquiryForm.get('country');
    if (countryControl) {
      countryControl.valueChanges.subscribe((selectedCountry) => {
        this.states = State.getStatesOfCountry(selectedCountry);
        this.stateDisabled = false;
        this.userEnquiryForm.get('state')?.setValue('');
        this.userEnquiryForm.get('city')?.setValue('');

        const stateControl = this.userEnquiryForm.get('state');
        if (countryControl && stateControl) {
          stateControl.valueChanges.subscribe((selectedState) => {
            this.cities = City.getCitiesOfState(selectedCountry, selectedState);
            this.cityDisabled = false;
            this.userEnquiryForm.get('city')?.setValue('');
          });
        }
      });
    }
  }

  constructor(
    private http: HttpClient,
    private renderer: Renderer2,
    private userEnquiryService: UserEnquiryService,
    private router: Router
  ) {}

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
      checkbox: false,
    });
  }

  onSubmitUserEnquiry() {
    if (this.userEnquiryForm.valid) {
      // this.userEnquiryForm
      //   .get('phone_number')
      //   ?.setValue(parseInt(this.userEnquiryForm.get('phone_number')?.value));
      const data = this.userEnquiryForm.value;
      this.userEnquiryService.postData(data).subscribe(
        (response: any) => {
          console.log('User Enquiry posted successfully:', response);
          this.clearForm();
          document.getElementById('closeUserEnquiryModel')?.click();
          // this.router.navigate(['/']);
        },
        (error: any) => {
          console.log('error ' + error.message);
        }
      );
    } else {
      this.userEnquiryForm.markAllAsTouched();
    }
  }

  clearFormValidation() {
    this.userEnquiryForm.markAsUntouched();
    this.clearForm();
  }
}
