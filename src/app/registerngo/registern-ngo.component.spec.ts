import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisternNgoComponent } from './registern-ngo.component';

describe('RegisternNgoComponent', () => {
  let component: RegisternNgoComponent;
  let fixture: ComponentFixture<RegisternNgoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisternNgoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisternNgoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
