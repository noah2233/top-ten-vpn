import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestVpnForComponent } from './best-vpn-for.component';

describe('BestVpnForComponent', () => {
  let component: BestVpnForComponent;
  let fixture: ComponentFixture<BestVpnForComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestVpnForComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestVpnForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
