import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchclubComponent } from './searchclub.component';

describe('SearchclubComponent', () => {
  let component: SearchclubComponent;
  let fixture: ComponentFixture<SearchclubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchclubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchclubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
