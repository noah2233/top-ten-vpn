import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopTenReviewsComponent } from './top-ten-reviews.component';

describe('TopTenReviewsComponent', () => {
  let component: TopTenReviewsComponent;
  let fixture: ComponentFixture<TopTenReviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopTenReviewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopTenReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
