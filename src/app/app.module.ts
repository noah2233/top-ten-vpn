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

// core

// shared
import { SiteHeaderComponent } from '@shared/site-header/site-header.component';
import { SiteFooterComponent } from '@shared/site-footer/site-footer.component';

// pages
import { TopTenVpnComponent } from '@pages/top-ten-vpn/top-ten-vpn.component';

@NgModule({
  declarations: [
    AppComponent,
    SiteHeaderComponent,
    SiteFooterComponent,
    TopTenVpnComponent
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
    ResizableModule
  ],
  providers: [],
})
export class AppModule {
}
