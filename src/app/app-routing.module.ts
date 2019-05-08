import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as pages from '@core/consts/pages';

// pages
import { TopTenVpnComponent } from './pages/top-ten-vpn/top-ten-vpn.component';

const routes: Routes = [
  { path: '', component: TopTenVpnComponent },
  { path: pages.topTenVpn.href, component: TopTenVpnComponent },
  { path: '**', component: TopTenVpnComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { initialNavigation: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
