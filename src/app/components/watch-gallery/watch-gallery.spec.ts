import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchGallery } from './watch-gallery';

describe('WatchGallery', () => {
  let component: WatchGallery;
  let fixture: ComponentFixture<WatchGallery>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WatchGallery]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WatchGallery);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
