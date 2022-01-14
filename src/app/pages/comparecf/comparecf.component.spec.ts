import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparecfComponent } from './comparecf.component';

describe('ComparecfComponent', () => {
  let component: ComparecfComponent;
  let fixture: ComponentFixture<ComparecfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComparecfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparecfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
