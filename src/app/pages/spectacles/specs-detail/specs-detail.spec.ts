import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecsDetail } from './specs-detail';

describe('SpecsDetail', () => {
  let component: SpecsDetail;
  let fixture: ComponentFixture<SpecsDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecsDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecsDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
