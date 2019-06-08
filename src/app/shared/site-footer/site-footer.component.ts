import { Component, OnInit } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { AdvertisingDisclosureComponent } from '@core/advertising-disclosure/advertising-disclosure.component';
@Component({
  selector: 'site-footer',
  templateUrl: './site-footer.component.html',
  styleUrls: ['./site-footer.component.css']
})
export class SiteFooterComponent implements OnInit {

  constructor(private _ngbModal: NgbModal) { }

  ngOnInit() {
  }

  openAdvertisingDisclosure() {
    const modalRef = this._ngbModal.open(AdvertisingDisclosureComponent);
  }
}
