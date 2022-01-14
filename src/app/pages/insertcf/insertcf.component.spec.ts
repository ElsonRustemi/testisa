import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertcfComponent } from './insertcf.component';

describe('InsertcfComponent', () => {
  let component: InsertcfComponent;
  let fixture: ComponentFixture<InsertcfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertcfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertcfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
