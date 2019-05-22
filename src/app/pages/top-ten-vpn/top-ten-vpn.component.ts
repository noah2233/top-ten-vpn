import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'top-ten-vpn',
  templateUrl: './top-ten-vpn.component.html',
  styleUrls: ['./top-ten-vpn.component.css']
})
export class TopTenVpnComponent implements OnInit {
  showAdvertisingDisclosure: boolean;

  constructor() { }

  ngOnInit() {
  }

  toggleAdvertisingDisclosure() {
    this.showAdvertisingDisclosure = !this.showAdvertisingDisclosure;
  }

  closeToggleAdvertisingDisclosure() {
    this.showAdvertisingDisclosure = false;
  }
}
