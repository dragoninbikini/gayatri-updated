import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutImage } from './about-image';

describe('AboutImage', () => {
  let component: AboutImage;
  let fixture: ComponentFixture<AboutImage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutImage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutImage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
