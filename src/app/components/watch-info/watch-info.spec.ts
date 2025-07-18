import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchInfo } from './watch-info';

describe('WatchInfo', () => {
  let component: WatchInfo;
  let fixture: ComponentFixture<WatchInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WatchInfo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WatchInfo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
