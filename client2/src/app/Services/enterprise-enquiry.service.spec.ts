import { TestBed } from '@angular/core/testing';

import { EnterpriseEnquiryService } from './enterprise-enquiry.service';

describe('EnterpriseEnquiryService', () => {
  let service: EnterpriseEnquiryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnterpriseEnquiryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
