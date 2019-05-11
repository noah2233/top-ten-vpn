import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VpnReviewsComponent } from './vpn-reviews.component';

describe('VpnReviewsComponent', () => {
  let component: VpnReviewsComponent;
  let fixture: ComponentFixture<VpnReviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VpnReviewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VpnReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
