import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchCarousel } from './watch-carousel';

describe('WatchCarousel', () => {
  let component: WatchCarousel;
  let fixture: ComponentFixture<WatchCarousel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WatchCarousel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WatchCarousel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
