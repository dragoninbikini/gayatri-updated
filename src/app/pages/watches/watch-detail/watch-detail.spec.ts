import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchDetail } from './watch-detail';

describe('WatchDetail', () => {
  let component: WatchDetail;
  let fixture: ComponentFixture<WatchDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WatchDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WatchDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
