import { ComponentFixture, TestBed } from '@angular/core/testing';

import { manage } from './manage';

describe('manage', () => {
  let component: manage;
  let fixture: ComponentFixture<manage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [manage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(manage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
