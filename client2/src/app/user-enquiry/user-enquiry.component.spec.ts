import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEnquiryComponent } from './user-enquiry.component';

describe('UserEnquiryComponent', () => {
  let component: UserEnquiryComponent;
  let fixture: ComponentFixture<UserEnquiryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserEnquiryComponent]
    });
    fixture = TestBed.createComponent(UserEnquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
