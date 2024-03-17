import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminpolicyhistoryComponent } from './adminpolicyhistory.component';

describe('AdminpolicyhistoryComponent', () => {
  let component: AdminpolicyhistoryComponent;
  let fixture: ComponentFixture<AdminpolicyhistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminpolicyhistoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminpolicyhistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
