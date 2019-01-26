import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAccordianComponent } from './home-accordian.component';

describe('HomeAccordianComponent', () => {
  let component: HomeAccordianComponent;
  let fixture: ComponentFixture<HomeAccordianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeAccordianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAccordianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
