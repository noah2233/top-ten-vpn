import { Component, OnInit } from '@angular/core';

import { Reviews } from '@DB/reviewsDB';

import { Review } from '@core/interface';

import { orderBy } from 'lodash';
@Component({
  selector: 'top-ten-reviews',
  templateUrl: './top-ten-reviews.component.html',
  styleUrls: ['./top-ten-reviews.component.css']
})
export class TopTenReviewsComponent implements OnInit {
  reviews: Review[] = [];

  constructor() { }

  ngOnInit() {
    this.initTopTenReviews();
  }

  initTopTenReviews() {
    // const _reviews = Reviews;
    this.reviews = orderBy(Reviews, ['score'], ['asc']).slice(0, 5);
  }
}
