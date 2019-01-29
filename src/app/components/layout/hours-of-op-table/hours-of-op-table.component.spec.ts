import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule, MatSortModule, MatTableModule } from '@angular/material';

import { HoursOfOpTableComponent } from './hours-of-op-table.component';

describe('HoursOfOpTableComponent', () => {
  let component: HoursOfOpTableComponent;
  let fixture: ComponentFixture<HoursOfOpTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoursOfOpTableComponent ],
      imports: [
        NoopAnimationsModule,
        MatPaginatorModule,
        MatSortModule,
        MatTableModule,
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoursOfOpTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
