import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserEnquiryComponent } from './user-enquiry/user-enquiry.component';
import { EnterpriseEnquiryComponent } from './enterprise-enquiry/enterprise-enquiry.component';

@NgModule({
  declarations: [
    AppComponent,
    UserEnquiryComponent,
    EnterpriseEnquiryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
