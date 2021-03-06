import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

import { forEach } from 'lodash';

import * as pages from '@DB/pages';
import { Page, ChildGroupPage } from '@core/interface';

// pages
import { TopTenVpnComponent } from '@pages/top-ten-vpn/top-ten-vpn.component';
import { BestVpnForComponent } from '@pages/best-vpn-for/best-vpn-for.component';
import { ReviewsComponent } from '@pages/reviews/reviews.component';

const routes: Routes = [
  { path: '', component: TopTenVpnComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(private _router: Router) {
    this.createChildRoutes(pages.bestVpnFor, BestVpnForComponent);
    this.createChildRoutes(pages.vpnReviews, ReviewsComponent);
  }

  createChildRoutes(parent: Page, component: any) {

    const that = this;
    forEach(parent.childGroupPages, function (childGroupPage: ChildGroupPage) {
      forEach(childGroupPage.pages, function (childPage: Page) {
        that._router.config.unshift(
          { path: childPage.path, component: component },
        );
      });
    });
  }
}
