import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminpolicyComponent } from './adminpolicy.component';

describe('AdminpolicyComponent', () => {
  let component: AdminpolicyComponent;
  let fixture: ComponentFixture<AdminpolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminpolicyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminpolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
