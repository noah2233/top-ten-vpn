import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as pages from '@core/consts/pages';

// pages
import { TopTenVpnComponent } from './pages/top-ten-vpn/top-ten-vpn.component';

const routes: Routes = [
  { path: '', redirectTo: pages.topTenVpn, pathMatch: 'full' },
  { path: pages.topTenVpn, component: TopTenVpnComponent },
  { path: '**', redirectTo: pages.topTenVpn, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { initialNavigation: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
