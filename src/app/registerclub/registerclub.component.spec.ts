import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterclubComponent } from './registerclub.component';

describe('RegisterclubComponent', () => {
  let component: RegisterclubComponent;
  let fixture: ComponentFixture<RegisterclubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterclubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterclubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
