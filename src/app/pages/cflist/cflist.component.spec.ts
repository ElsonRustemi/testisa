import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CflistComponent } from './cflist.component';

describe('CflistComponent', () => {
  let component: CflistComponent;
  let fixture: ComponentFixture<CflistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CflistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CflistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
