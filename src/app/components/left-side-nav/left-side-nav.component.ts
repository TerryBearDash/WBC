import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-left-side-nav',
  templateUrl: './left-side-nav.component.html',
  styleUrls: ['./left-side-nav.component.scss']
})
export class LeftSideNavComponent implements OnInit {

  @Input() shownav: boolean = false;
  @Output() close = new EventEmitter();

  subItems = false;
  activeText = '';

  constructor() { }

  ngOnInit(): void {
  }

  toggleSubItems(text: string) {
    this.activeText = text;
    this.subItems = !this.subItems;
  }

  closeMenu() {
    this.close.emit(false);
  }

}
