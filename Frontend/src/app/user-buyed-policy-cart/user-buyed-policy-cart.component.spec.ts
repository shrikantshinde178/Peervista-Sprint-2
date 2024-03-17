import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBuyedPolicyCartComponent } from './user-buyed-policy-cart.component';

describe('UserBuyedPolicyCartComponent', () => {
  let component: UserBuyedPolicyCartComponent;
  let fixture: ComponentFixture<UserBuyedPolicyCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserBuyedPolicyCartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserBuyedPolicyCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
