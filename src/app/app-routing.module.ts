import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as pages from '@core/consts/pages';

// pages
import { TopTenVpnComponent } from './pages/top-ten-vpn/top-ten-vpn.component';
import { BestVpnForComponent } from './pages/best-vpn-for/best-vpn-for.component';
import { VpnReviewsComponent } from './pages/vpn-reviews/vpn-reviews.component';
import { LearnComponent } from './pages/learn/learn.component';

// best-vpn-for children
import { WindowsComponent } from './pages/best-vpn-for/devicesOrOs/windows/windows.component';

const routes: Routes = [
  { path: '', redirectTo: pages.topTenVpn.href, pathMatch: 'full' },
  { path: pages.topTenVpn.href, component: TopTenVpnComponent },
  {
    path: pages.bestVpnFor.href, component: BestVpnForComponent,
    children: [
      { path: pages.bestVpnFor.devicesOrOs.windows.href, component: WindowsComponent },
    ]
  },
  { path: pages.vpnReviews.href, component: VpnReviewsComponent },
  { path: pages.learn.href, component: LearnComponent },
  { path: '**', redirectTo: pages.topTenVpn.href, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { initialNavigation: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
