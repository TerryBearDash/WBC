import { Component, Input, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { DataBindingDirective } from '@progress/kendo-angular-grid';
import { SearchService } from 'src/app/services/search.service';
import { SelectableSettings } from "@progress/kendo-angular-grid";
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.scss']
})
export class DataGridComponent implements OnInit, OnDestroy {

  @Input() grid: boolean = false;

  @ViewChild(DataBindingDirective) dataBinding!: DataBindingDirective;
  public gridData: any[] = [];
  public gridView: any[] = [];
  public gallery: string[] = [];
  public activeImage = '';
  public categories: any = {};

  selectableSettings: SelectableSettings = {
    cell: true,
    mode: 'single',
    drag: true,
  };

  constructor (
    private api: SearchService,
    private dts: DataService
  ) { }

  ngOnInit(): void {
    this.list();
  }

  ngOnDestroy() {
    this.listunsub();
  }

  filterData(ev: any) {
    const data = Object.assign([], this.gridData);
    const result: any[] = [];
    const r = data.forEach((d, i) => {const str = Object.values(d).join(" ").toLowerCase(); str.includes(ev.target.value) ? result.push(d) : null});
    this.gridView = ev.target.value.length > 0 ? Object.assign([], result) : Object.assign([], this.gridData);
  }

  list() {
    this.dts.searchData.subscribe((d: any) => {
      console.log(d);
      this.gridData = Object.assign([], d.data);
      this.gridView = Object.assign([], d.data);
      this.categories = Object.assign({}, d.aggregations);
    })
  }

  listunsub() {
    this.dts.searchData.unsubscribe();
  }

  showGallery(gallery: string[]) {
    this.activeImage = gallery[0];
    this.gallery = Object.assign([], gallery);
  }

  closeGallery() {
    this.activeImage = '';
    this.gallery = [];
  }

  setActiveImage(image: string) {
    this.activeImage = image;
  }

}
