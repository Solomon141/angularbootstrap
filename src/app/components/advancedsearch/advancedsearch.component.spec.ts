import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedsearchComponent } from './advancedsearch.component';

describe('AdvancedsearchComponent', () => {
  let component: AdvancedsearchComponent;
  let fixture: ComponentFixture<AdvancedsearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdvancedsearchComponent]
    });
    fixture = TestBed.createComponent(AdvancedsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
