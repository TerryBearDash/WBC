import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-right-side-nav',
  templateUrl: './right-side-nav.component.html',
  styleUrls: ['./right-side-nav.component.scss']
})
export class RightSideNavComponent implements OnInit {

  @Input() shownav: boolean = false;
  @Output() close = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  closeMenu() {
    this.close.emit(false);
  }

}
