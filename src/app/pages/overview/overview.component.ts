import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  showleft = false;
  showright = false;

  constructor() { }

  ngOnInit(): void {
  }

  setLeftNav(ev: any) {
    console.log(ev);
    this.showleft = ev;
  }

  setRightNav(ev: any) {
    this.showright = ev;
  }

}
