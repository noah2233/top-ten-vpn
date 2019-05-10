import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as pages from '@core/consts/pages';

// pages
import { TopTenVpnComponent } from './pages/top-ten-vpn/top-ten-vpn.component';
import { BestVpnForComponent } from './pages/best-vpn-for/best-vpn-for.component';

// best-vpn-for children
import { WindowsComponent } from './pages/best-vpn-for/windows/windows.component';

const routes: Routes = [
  { path: '', component: TopTenVpnComponent },
  { path: pages.topTenVpn.href, component: TopTenVpnComponent },
  {
    path: pages.bestVpnFor.href, component: BestVpnForComponent,
    children: [
      { path: pages.bestVpnFor.windows.href, component: WindowsComponent },
    ]
  },
  { path: '**', component: TopTenVpnComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { initialNavigation: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
