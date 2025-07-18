import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Spectacles } from './spectacles';

describe('Spectacles', () => {
  let component: Spectacles;
  let fixture: ComponentFixture<Spectacles>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Spectacles]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Spectacles);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
