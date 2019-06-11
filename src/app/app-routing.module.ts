import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as pages from '@core/consts/pages';

// pages
import { TopTenVpnComponent } from './pages/top-ten-vpn/top-ten-vpn.component';
import { BestVpnForComponent } from './pages/best-vpn-for/best-vpn-for.component';

const routes: Routes = [
  { path: '', component: TopTenVpnComponent },
  { path: pages.bestVpnFor.ChildGroupPages[0].pages[0].path, component: BestVpnForComponent }, // windows
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { initialNavigation: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
