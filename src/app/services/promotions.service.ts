import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private api: ApiService
  ) { }

  getcounts() {
    return this.api.list("/promotion-count");
  }

}
