import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecsContent } from './specs-content';

describe('SpecsContent', () => {
  let component: SpecsContent;
  let fixture: ComponentFixture<SpecsContent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecsContent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecsContent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
