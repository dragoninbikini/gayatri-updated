import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecsInfo } from './specs-info';

describe('SpecsInfo', () => {
  let component: SpecsInfo;
  let fixture: ComponentFixture<SpecsInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecsInfo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecsInfo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
