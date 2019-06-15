import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

import { forEach } from 'lodash';

import * as pages from '@core/consts/pages';
import { Page, ChildGroupPage } from '@core/interface';

// pages
import { TopTenVpnComponent } from './pages/top-ten-vpn/top-ten-vpn.component';
import { BestVpnForComponent } from './pages/best-vpn-for/best-vpn-for.component';

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
  }

  createChildRoutes(parent: Page, component: any) {

    const that = this;
    forEach(pages, function (page: Page) {
      if (page.name === parent.name) {
        forEach(page.ChildGroupPages, function (childGroupPage: ChildGroupPage) {
          forEach(childGroupPage.pages, function (childPage: Page) {
            that._router.config.unshift(
              { path: childPage.path, component: component },
            );
          });
        });
      }
    });

  }
}
