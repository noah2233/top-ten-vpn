import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestVpnForSideMenuComponent } from './best-vpn-for-side-menu.component';

describe('BestVpnForSideMenuComponent', () => {
  let component: BestVpnForSideMenuComponent;
  let fixture: ComponentFixture<BestVpnForSideMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestVpnForSideMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestVpnForSideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
