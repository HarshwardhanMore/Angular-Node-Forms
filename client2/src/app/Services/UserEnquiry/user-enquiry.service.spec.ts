import { TestBed } from '@angular/core/testing';

import { UserEnquiryService } from './user-enquiry.service';

describe('UserEnquiryService', () => {
  let service: UserEnquiryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserEnquiryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
