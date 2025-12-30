import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrafficInfo } from './traffic-info';

describe('TrafficInfo', () => {
  let component: TrafficInfo;
  let fixture: ComponentFixture<TrafficInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrafficInfo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrafficInfo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
