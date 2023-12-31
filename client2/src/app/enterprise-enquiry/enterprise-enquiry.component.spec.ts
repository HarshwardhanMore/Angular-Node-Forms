import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterpriseEnquiryComponent } from './enterprise-enquiry.component';

describe('EnterpriseEnquiryComponent', () => {
  let component: EnterpriseEnquiryComponent;
  let fixture: ComponentFixture<EnterpriseEnquiryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnterpriseEnquiryComponent]
    });
    fixture = TestBed.createComponent(EnterpriseEnquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
