import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparisonreportsComponent } from './comparisonreports.component';

describe('ComparisonreportsComponent', () => {
  let component: ComparisonreportsComponent;
  let fixture: ComponentFixture<ComparisonreportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComparisonreportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparisonreportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
