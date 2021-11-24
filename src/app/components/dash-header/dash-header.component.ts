import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-dash-header',
  templateUrl: './dash-header.component.html',
  styleUrls: ['./dash-header.component.scss']
})
export class DashHeaderComponent implements OnInit {
  
  @Output() leftnav = new EventEmitter<boolean>();
  @Output() rightnav = new EventEmitter<boolean>();

  @Input() showleft = false;
  @Input() showright = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleLeft() {
    this.showleft = !this.showleft;
    this.leftnav.emit(this.showleft);
  }

  toggleRight() {
    this.showright = !this.showright;
    this.rightnav.emit(this.showright);
  }

}
