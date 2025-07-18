import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecsGallery } from './specs-gallery';

describe('SpecsGallery', () => {
  let component: SpecsGallery;
  let fixture: ComponentFixture<SpecsGallery>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecsGallery]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecsGallery);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
