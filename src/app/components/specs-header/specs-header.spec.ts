import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecsHeader } from './specs-header';

describe('SpecsHeader', () => {
  let component: SpecsHeader;
  let fixture: ComponentFixture<SpecsHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecsHeader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecsHeader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
