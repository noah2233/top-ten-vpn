import { NgtUniversalModule } from '@ng-toolkit/universal';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { EllipsisModule } from 'ngx-ellipsis';
import { ResizableModule } from 'angular-resizable-element';
import { ClickOutsideModule } from 'ng4-click-outside';

// core
import { AdvertisingDisclosureComponent } from '@core/advertising-disclosure/advertising-disclosure.component';

// shared
import { SiteHeaderComponent } from '@shared/site-header/site-header.component';
import { SiteFooterComponent } from '@shared/site-footer/site-footer.component';
import { BestVpnForSideMenuComponent } from '@shared/best-vpn-for-side-menu/best-vpn-for-side-menu.component';
import { TopRankingComponent } from '@shared/top-ranking/top-ranking.component';

// services
import { CommonService } from '@services/common.service';

// pages
import { TopTenVpnComponent } from '@pages/top-ten-vpn/top-ten-vpn.component';
import { BestVpnForComponent } from './pages/best-vpn-for/best-vpn-for.component';
import { ReviewsComponent } from './pages/reviews/reviews.component';

@NgModule({
  declarations: [
    AppComponent,
    SiteHeaderComponent,
    SiteFooterComponent,
    TopTenVpnComponent,
    AdvertisingDisclosureComponent,
    BestVpnForComponent,
    TopRankingComponent,
    BestVpnForSideMenuComponent,
    ReviewsComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    NgtUniversalModule,
    TransferHttpCacheModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    EllipsisModule,
    ResizableModule,
    ClickOutsideModule
  ],
  entryComponents: [AdvertisingDisclosureComponent, BestVpnForComponent, ReviewsComponent],
  providers: [CommonService],
})
export class AppModule {
}
