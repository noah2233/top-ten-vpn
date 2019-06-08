import { Component, OnInit } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'advertising-disclosure',
  templateUrl: './advertising-disclosure.component.html',
  styleUrls: ['./advertising-disclosure.component.css']
})
export class AdvertisingDisclosureComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
