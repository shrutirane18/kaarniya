import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchngoComponent } from './searchngo.component';

describe('SearchngoComponent', () => {
  let component: SearchngoComponent;
  let fixture: ComponentFixture<SearchngoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchngoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchngoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
