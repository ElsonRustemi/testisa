import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyzecfComponent } from './analyzecf.component';

describe('AnalyzecfComponent', () => {
  let component: AnalyzecfComponent;
  let fixture: ComponentFixture<AnalyzecfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalyzecfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyzecfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
