import { EnterpriseEnquiryService } from './../Services/EnterpriseEnquiry/enterprise-enquiry.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Country, State, City } from 'country-state-city';

@Component({
  selector: 'app-enterprise-enquiry',
  templateUrl: './enterprise-enquiry.component.html',
  styleUrls: ['./enterprise-enquiry.component.css'],
})
export class EnterpriseEnquiryComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private EnterpriseEnquiryService: EnterpriseEnquiryService,
    private router: Router
  ) {}

  enterpriseEnquiryForm: FormGroup = new FormGroup({
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
    phone_number: new FormControl('', [
      Validators.required,
      Validators.pattern(
        /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/
      ),
    ]),
    business_email: new FormControl('', [
      Validators.required,
      Validators.pattern(/^\S+@\S+\.\S+$/),
    ]),
    enterprise_name: new FormControl('', [Validators.required]),
    gst_number: new FormControl('', [Validators.required, Validators.pattern(/\d{2}[A-Z]{5}\d{4}[A-Z]{1}[A-Z\d]{1}[Z]{1}[A-Z\d]{1}/)]),
    enterprise_description: new FormControl('', [Validators.required]),
    website_link: new FormControl('', [Validators.required]),
    message: new FormControl('', [Validators.required]),
    checkbox: new FormControl(false),
  });

  countries = Country.getAllCountries();
  states: any[] = [];
  cities: any[] = [];

  stateDisabled: Boolean = true;
  cityDisabled: Boolean = true;

  ngOnInit() {
    const countryControl = this.enterpriseEnquiryForm.get('country');
    if (countryControl) {
      countryControl.valueChanges.subscribe((selectedCountry) => {
        this.states = State.getStatesOfCountry(selectedCountry);
        this.stateDisabled = false;
        this.enterpriseEnquiryForm.get('state')?.setValue('');
        this.enterpriseEnquiryForm.get('city')?.setValue('');

        const stateControl = this.enterpriseEnquiryForm.get('state');
        if (countryControl && stateControl) {
          stateControl.valueChanges.subscribe((selectedState) => {
            this.cities = City.getCitiesOfState(selectedCountry, selectedState);
            this.cityDisabled = false;
            this.enterpriseEnquiryForm.get('city')?.setValue('');
          });
        }
      });
    }
  }

  clearForm() {
    this.enterpriseEnquiryForm.reset({
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
      gst_number: '',
      enterprise_description: '',
      website_link: '',
      message: '',
      checkbox: false,
    });
  }
  
  clearFormValidation() {
    this.enterpriseEnquiryForm.markAsUntouched();
    this.clearForm();
  }

  onSubmitEnterpriseEnquiry() {
    if (this.enterpriseEnquiryForm.valid) {
      const data = this.enterpriseEnquiryForm.value;
      this.EnterpriseEnquiryService.postData(data).subscribe(
        (response: any) => {
          console.log('Enterprise Enquiry posted successfully:', response);
          this.clearFormValidation();
          document.getElementById('closeEnterpriseEnquiryModel')?.click();
        },
        (error: any) => {
          console.log('error ' + error.message);
        }
      );
      console.log(data);
    } else {
      this.enterpriseEnquiryForm.markAllAsTouched();
    }
  }

}
